# How Promises Work Under the Hood - Interview Perspective

Let me explain how this code executes and how Promises work internally.

## Your Code

```javascript
console.log("Start of script 3");

setTimeout(() => {
  console.log("This is from the Task Queue (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("This is from the Microtask Queue (Promise)");
});

console.log("End of script");
```

## Output

```
Start of script 3
End of script
This is from the Microtask Queue (Promise)
This is from the Task Queue (setTimeout)
```

**Why does Promise execute BEFORE setTimeout even though both have 0ms delay?** 🤔

---

## JavaScript's Queue System

JavaScript has **TWO separate queues**:

### 1. **Microtask Queue** (Job Queue)
- **Higher Priority**
- Used by: Promises, `queueMicrotask()`, `MutationObserver`
- Processes **ALL** microtasks before moving to macrotasks

### 2. **Macrotask Queue** (Task/Callback Queue)
- **Lower Priority**
- Used by: `setTimeout`, `setInterval`, `setImmediate`, I/O, UI rendering
- Processes **ONE** macrotask, then checks microtask queue

### Priority Order

```
┌─────────────────────────────────────┐
│        Call Stack (Sync)            │ ← 1st Priority (Executes immediately)
├─────────────────────────────────────┤
│      Microtask Queue (Promises)     │ ← 2nd Priority (After stack empties)
├─────────────────────────────────────┤
│    Macrotask Queue (setTimeout)     │ ← 3rd Priority (After all microtasks)
└─────────────────────────────────────┘
```

---

## Step-by-Step Execution

### **Step 1: First console.log (Synchronous)**

```javascript
console.log("Start of script 3"); // ← Executing
```

**Call Stack:**
```
┌─────────────────────────────┐
│ console.log("Start...")     │
└─────────────────────────────┘
```

**Output:**
```
Start of script 3
```

**Queues:**
```
Microtask Queue: []
Macrotask Queue: []
```

---

### **Step 2: setTimeout Called**

```javascript
setTimeout(() => {
  console.log("This is from the Task Queue (setTimeout)");
}, 0); // ← Executing
```

**What happens:**
1. `setTimeout` sends callback to **Web API**
2. Timer starts (0ms)
3. `setTimeout` returns immediately

**Web API:**
```
Timer (0ms) → Callback ready after 0ms
```

**After timer completes, callback moves to Macrotask Queue:**

**Queues:**
```
Microtask Queue: []
Macrotask Queue: [setTimeout callback]
```

---

### **Step 3: Promise Created**

```javascript
Promise.resolve().then(() => {
  console.log("This is from the Microtask Queue (Promise)");
}); // ← Executing
```

**What happens:**
1. `Promise.resolve()` creates an **already resolved** promise
2. `.then()` callback goes directly to **Microtask Queue**
3. Doesn't wait for anything (already resolved)

**Queues:**
```
Microtask Queue: [Promise callback]
Macrotask Queue: [setTimeout callback]
```

---

### **Step 4: Last console.log (Synchronous)**

```javascript
console.log("End of script"); // ← Executing
```

**Call Stack:**
```
┌─────────────────────────────┐
│ console.log("End...")       │
└─────────────────────────────┘
```

**Output so far:**
```
Start of script 3
End of script
```

**Call Stack after:**
```
┌─────────────────────────────┐
│         (empty)             │
└─────────────────────────────┘
```

**Queues:**
```
Microtask Queue: [Promise callback]  ← Has something!
Macrotask Queue: [setTimeout callback]
```

---

### **Step 5: Event Loop - Check Microtask Queue FIRST**

**Event Loop Rule:**
```
1. Is Call Stack empty?
   └─ YES → Check Microtask Queue
   
2. Are there Microtasks?
   └─ YES → Execute ALL microtasks until empty
   
3. After microtasks done → Execute ONE macrotask
```

**Event Loop finds Promise callback in Microtask Queue:**

**Call Stack:**
```
┌─────────────────────────────┐
│ Promise callback            │ ← Moved from Microtask Queue
└─────────────────────────────┘
```

**Executes:**
```javascript
console.log("This is from the Microtask Queue (Promise)");
```

**Output:**
```
Start of script 3
End of script
This is from the Microtask Queue (Promise)
```

**Queues:**
```
Microtask Queue: []                    ← Empty now!
Macrotask Queue: [setTimeout callback]  ← Waiting
```

---

### **Step 6: Event Loop - Now Check Macrotask Queue**

**All microtasks done → Now can execute ONE macrotask**

**Call Stack:**
```
┌─────────────────────────────┐
│ setTimeout callback         │ ← Moved from Macrotask Queue
└─────────────────────────────┘
```

**Executes:**
```javascript
console.log("This is from the Task Queue (setTimeout)");
```

**Final Output:**
```
Start of script 3
End of script
This is from the Microtask Queue (Promise)
This is from the Task Queue (setTimeout)
```

**Done!** ✅

---

## How Promises Work Under the Hood

### Promise States

A Promise has **3 states**:

```javascript
// 1. PENDING (initial state)
const promise = new Promise((resolve, reject) => {
  // Doing async work...
});

// 2. FULFILLED (success)
resolve(value); // Promise becomes fulfilled

// 3. REJECTED (error)
reject(error); // Promise becomes rejected
```

### Promise Internals

```javascript
// Simplified Promise internal structure
{
  state: 'pending',        // 'pending' | 'fulfilled' | 'rejected'
  value: undefined,        // Result value when fulfilled
  reason: undefined,       // Error when rejected
  onFulfilledCallbacks: [], // Array of .then() success handlers
  onRejectedCallbacks: []   // Array of .catch() error handlers
}
```

### How .then() Works

```javascript
Promise.resolve(42).then(value => {
  console.log(value); // 42
});
```

**Under the hood:**
1. Promise is already resolved with value `42`
2. `.then()` callback is added to **Microtask Queue**
3. Event Loop processes microtask
4. Callback executes with `value = 42`

---

## Complex Example - Multiple Promises

```javascript
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

Promise.resolve().then(() => console.log("4"));

setTimeout(() => console.log("5"), 0);

Promise.resolve().then(() => console.log("6"));

console.log("7");
```

### Execution Order

**Phase 1: Synchronous Code**
```
Call Stack: console.log("1") → Output: 1
Call Stack: setTimeout(2)     → Macrotask Queue: [2]
Call Stack: Promise.then(3)   → Microtask Queue: [3]
Call Stack: Promise.then(4)   → Microtask Queue: [3, 4]
Call Stack: setTimeout(5)     → Macrotask Queue: [2, 5]
Call Stack: Promise.then(6)   → Microtask Queue: [3, 4, 6]
Call Stack: console.log("7")  → Output: 7
```

**Phase 2: Microtasks (ALL of them)**
```
Execute 3 → Output: 3
Execute 4 → Output: 4
Execute 6 → Output: 6
```

**Phase 3: Macrotasks (ONE at a time)**
```
Execute 2 → Output: 2
Check microtasks (none)
Execute 5 → Output: 5
```

**Final Output:**
```
1
7
3
4
6
2
5
```

---

## Interview Question Patterns

### **Q1: Predict the Output**

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

**Answer:**
```
A
D
C
B
```

**Explanation:**
- `A` and `D`: Synchronous (immediate)
- `C`: Microtask (runs before macrotask)
- `B`: Macrotask (runs last)

---

### **Q2: Nested Promises and setTimeout**

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => console.log("3"));
}, 0);

Promise.resolve().then(() => {
  console.log("4");
  setTimeout(() => console.log("5"), 0);
});

console.log("6");
```

**Answer:**
```
1
6
4
2
3
5
```

**Step-by-step:**
1. `1`, `6` → Synchronous
2. `4` → First microtask executes, schedules setTimeout(5)
3. `2` → First macrotask executes, schedules Promise(3)
4. `3` → Microtask from step 3 (must complete before next macrotask)
5. `5` → Second macrotask

---

### **Q3: Promise Chain**

```javascript
Promise.resolve()
  .then(() => console.log("1"))
  .then(() => console.log("2"));

Promise.resolve()
  .then(() => console.log("3"))
  .then(() => console.log("4"));

console.log("5");
```

**Answer:**
```
5
1
3
2
4
```

**Why?**
- `5`: Synchronous first
- `1`: First .then() of first promise
- `3`: First .then() of second promise
- `2`: Second .then() of first promise (waits for first .then())
- `4`: Second .then() of second promise

**Microtask Queue evolution:**
```
After sync code: [then(1), then(3)]
After 1 executes: [then(3), then(2)]
After 3 executes: [then(2), then(4)]
After 2 executes: [then(4)]
After 4 executes: []
```

---

### **Q4: Mixed Async Operations**

```javascript
async function test() {
  console.log("1");
  
  await Promise.resolve();
  console.log("2");
  
  await Promise.resolve();
  console.log("3");
}

test();
console.log("4");
```

**Answer:**
```
1
4
2
3
```

**Explanation:**
- `1`: Synchronous in async function
- `await` converts rest of function to microtask
- `4`: Synchronous outside function
- `2`: First await completes
- `3`: Second await completes

**Behind the scenes (async/await is syntactic sugar for Promises):**
```javascript
function test() {
  console.log("1");
  
  return Promise.resolve()
    .then(() => {
      console.log("2");
      return Promise.resolve();
    })
    .then(() => {
      console.log("3");
    });
}
```

---

## Promise Creation Patterns

### Pattern 1: Promise Constructor

```javascript
const promise = new Promise((resolve, reject) => {
  console.log("Executor runs immediately"); // Synchronous!
  
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

console.log("After promise creation");

// Output:
// Executor runs immediately
// After promise creation
// (1 second later) resolve triggers
```

**Key Point:** Promise executor runs **synchronously**!

---

### Pattern 2: Promise.resolve()

```javascript
const p1 = Promise.resolve(42);
// Immediately fulfilled promise

p1.then(value => console.log(value)); // Microtask

console.log("Sync");

// Output:
// Sync
// 42
```

---

### Pattern 3: Promise.reject()

```javascript
Promise.reject("Error")
  .catch(err => console.log("Caught:", err));

console.log("Sync");

// Output:
// Sync
// Caught: Error
```

---

## Advanced: Microtask Starvation

```javascript
console.log("Start");

Promise.resolve().then(function callback() {
  console.log("Microtask");
  
  // Creates another microtask!
  Promise.resolve().then(callback);
});

setTimeout(() => console.log("Macrotask"), 0);

console.log("End");
```

**Output:**
```
Start
End
Microtask
Microtask
Microtask
Microtask
... (infinite loop!)
```

**Problem:** Macrotask **never executes** because microtasks keep creating more microtasks!

**This is called "Microtask Starvation"**

---

## Real-World Use Cases

### Use Case 1: Async/Await (Modern Promise Syntax)

```javascript
async function fetchUserData(userId) {
  console.log("Fetching user...");
  
  const user = await fetch(`/api/users/${userId}`);
  const data = await user.json();
  
  console.log("User:", data);
  return data;
}

// Behind the scenes:
function fetchUserData(userId) {
  console.log("Fetching user...");
  
  return fetch(`/api/users/${userId}`)
    .then(user => user.json())
    .then(data => {
      console.log("User:", data);
      return data;
    });
}
```

---

### Use Case 2: Error Handling

```javascript
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error))
  .finally(() => console.log("Cleanup"));
```

---

### Use Case 3: Promise.all (Parallel Execution)

```javascript
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/posts');
const promise3 = fetch('/api/comments');

Promise.all([promise1, promise2, promise3])
  .then(([users, posts, comments]) => {
    console.log("All data loaded!");
  })
  .catch(error => {
    console.log("One failed:", error);
  });
```

**Key:** Waits for **ALL** promises, fails if **ANY** fails.

---

### Use Case 4: Promise.race (First to Resolve)

```javascript
const timeout = new Promise((_, reject) => 
  setTimeout(() => reject("Timeout"), 5000)
);

const dataFetch = fetch('/api/data');

Promise.race([dataFetch, timeout])
  .then(data => console.log("Success:", data))
  .catch(err => console.log("Error:", err));
```

**Use:** Implementing timeouts for API calls.

---

## Common Interview Questions

### **Q: What's the difference between Microtask and Macrotask?**

**Answer:**

| Feature | Microtask | Macrotask |
|---------|-----------|-----------|
| **Examples** | Promises, queueMicrotask | setTimeout, setInterval |
| **Priority** | Higher (runs first) | Lower |
| **Execution** | ALL at once | ONE at a time |
| **When** | After sync code, before next macrotask | After microtasks done |

---

### **Q: Why do we need two queues?**

**Answer:**

"The two-queue system allows JavaScript to:

1. **Prioritize promises** - User-facing async operations (like API responses) execute before timers
2. **Prevent blocking** - Process related microtasks together, then let UI render
3. **Maintain responsiveness** - Macrotasks give browser chance to render between heavy operations"

---

### **Q: How does async/await work under the hood?**

**Answer:**

"async/await is syntactic sugar over Promises:

- `async function` always returns a Promise
- `await` pauses execution and converts rest of function into a `.then()` callback
- The callback goes to the Microtask Queue
- Execution resumes when the awaited promise resolves"

```javascript
// This:
async function example() {
  const data = await fetchData();
  console.log(data);
}

// Is equivalent to:
function example() {
  return fetchData().then(data => {
    console.log(data);
  });
}
```

---

### **Q: What happens if a Promise never resolves?**

**Answer:**

```javascript
const neverResolves = new Promise(() => {
  // Never call resolve() or reject()
});

neverResolves.then(() => console.log("This never runs"));

console.log("But this runs fine");
```

**Result:** Promise stays in **pending** state forever. `.then()` callbacks never execute. No error thrown. This can cause memory leaks!

---

## Event Loop Algorithm (Simplified)

```
while (true) {
  // 1. Execute all synchronous code
  if (callStack.notEmpty()) {
    execute(callStack.pop());
  }
  
  // 2. Process ALL microtasks
  while (microtaskQueue.notEmpty()) {
    execute(microtaskQueue.dequeue());
  }
  
  // 3. Render UI (if needed)
  if (needsRender) {
    render();
  }
  
  // 4. Process ONE macrotask
  if (macrotaskQueue.notEmpty()) {
    execute(macrotaskQueue.dequeue());
  }
  
  // 5. Repeat
}
```

---

## Summary Table

| Aspect | setTimeout (Macrotask) | Promise (Microtask) |
|--------|----------------------|-------------------|
| **Queue** | Macrotask Queue | Microtask Queue |
| **Priority** | Lower | Higher |
| **Execution** | One per event loop cycle | All per event loop cycle |
| **When** | After microtasks | After sync, before macrotasks |
| **Use** | Timers, I/O, UI events | Async operations, await |

---

## Interview Answer Template

**"How do Promises work under the hood?"**

**Perfect Answer:**

"Promises are JavaScript's way of handling asynchronous operations. Internally, a Promise has three states: pending, fulfilled, or rejected. When you call `.then()`, the callback is added to the Microtask Queue, which has higher priority than the Macrotask Queue used by setTimeout.

The Event Loop processes all microtasks before moving to the next macrotask. This is why Promise callbacks execute before setTimeout callbacks, even with 0ms delay. This design ensures promise-based async operations like API calls are prioritized over timers, making applications more responsive.

Modern async/await syntax is built on top of Promises, converting awaited code into promise chains behind the scenes."

---

## Key Takeaways

✅ Promises use the **Microtask Queue** (higher priority)  
✅ setTimeout uses the **Macrotask Queue** (lower priority)  
✅ **All microtasks** execute before **next macrotask**  
✅ Event Loop: Sync → Microtasks → Render → One Macrotask → Repeat  
✅ async/await is **syntactic sugar** for Promises  
✅ Promise executor runs **synchronously**  
✅ .then() callbacks run **asynchronously** (microtask)  

You're now ready to ace any Promise interview question! 🚀