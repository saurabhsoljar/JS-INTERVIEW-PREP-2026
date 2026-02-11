Chaliye **JavaScript Proxy aur Reflect** ko detail mein samajhte hain - interview ke liye perfect notes ke saath!

---

## **1. PROXY OBJECT**

### **Kya hai Proxy?**
Proxy ek wrapper hai jo kisi object ke operations ko intercept kar sakta hai. Yeh aapko control deta hai ki object ke saath kya ho raha hai.

**Syntax:**
```javascript
const proxy = new Proxy(target, handler);
```
- **target**: Original object
- **handler**: Object with "traps" (interceptor functions)

### **Common Traps (Interview mein important):**

1. **get** - Property read karte waqt
2. **set** - Property write karte waqt  
3. **has** - `in` operator ke liye
4. **deleteProperty** - Property delete karte waqt
5. **apply** - Function call ke liye
6. **construct** - `new` operator ke liye

### **Examples:**

**Example 1: Validation (Bahut common interview question)**
```javascript
const user = {
  name: 'Ali',
  age: 25
};

const handler = {
  set(target, property, value) {
    if (property === 'age') {
      if (typeof value !== 'number') {
        throw new TypeError('Age must be a number');
      }
      if (value < 0 || value > 150) {
        throw new RangeError('Age must be between 0-150');
      }
    }
    target[property] = value;
    return true; // Important: return true for success
  }
};

const proxyUser = new Proxy(user, handler);

proxyUser.age = 30;  // ✅ Works
proxyUser.age = -5;  // ❌ Error: Age must be between 0-150
```

**Example 2: Default Values**
```javascript
const handler = {
  get(target, property) {
    return property in target ? target[property] : 'Not Found';
  }
};

const obj = new Proxy({name: 'Ahmed'}, handler);
console.log(obj.name);     // 'Ahmed'
console.log(obj.salary);   // 'Not Found'
```

**Example 3: Read-Only Object**
```javascript
const readOnly = (obj) => {
  return new Proxy(obj, {
    set() {
      throw new Error('Cannot modify read-only object');
    },
    deleteProperty() {
      throw new Error('Cannot delete property');
    }
  });
};

const config = readOnly({api: 'https://api.com'});
config.api = 'new';  // ❌ Error
```

---

## **2. REFLECT OBJECT**

### **Kya hai Reflect?**
Reflect ek built-in object hai jo **default object operations** ke liye methods provide karta hai. Yeh Proxy handlers ke andar use hota hai.

### **Kyun use karte hain?**
1. ✅ Cleaner code
2. ✅ Proper return values (boolean success/failure)
3. ✅ Error handling better hai

### **Common Reflect Methods:**

| Method | Kya karta hai |
|--------|---------------|
| `Reflect.get(target, prop)` | Property read |
| `Reflect.set(target, prop, value)` | Property write |
| `Reflect.has(target, prop)` | Check property exists |
| `Reflect.deleteProperty(target, prop)` | Delete property |
| `Reflect.apply(func, thisArg, args)` | Function call |
| `Reflect.construct(Class, args)` | New instance create |

### **Examples:**

**Example 1: get() method**
```javascript
const obj = {name: 'Sara', age: 20};

// Old way
console.log(obj.name);  // 'Sara'

// Reflect way
console.log(Reflect.get(obj, 'name'));  // 'Sara'
```

**Example 2: set() with return value**
```javascript
const obj = {};

// Old way - no return value
obj.name = 'Ali';

// Reflect way - returns boolean
const success = Reflect.set(obj, 'name', 'Ali');
console.log(success);  // true
```

**Example 3: Proxy + Reflect combination (BEST PRACTICE)**
```javascript
const handler = {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(target, property, receiver);
  },
  
  set(target, property, value, receiver) {
    console.log(`Setting ${property} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  }
};

const obj = new Proxy({}, handler);
obj.name = 'Fatima';  // Logs: "Setting name to Fatima"
console.log(obj.name); // Logs: "Getting name", prints: "Fatima"
```

---

## **🎯 INTERVIEW PREPARATION NOTES**

### **Q1: Proxy vs Object.defineProperty mein difference?**
**Answer:**
- `Object.defineProperty` - Single property ke liye
- `Proxy` - Entire object ke liye, multiple operations intercept kar sakte hain

### **Q2: Practical use cases?**
**Answer:**
1. **Validation** - Form data validation
2. **Logging** - Property access tracking
3. **Data Binding** - Vue.js reactivity system
4. **API Mocking** - Testing ke liye
5. **Privacy** - Private properties (`_property`)
6. **Caching** - Expensive computations cache karna

### **Q3: Performance impact?**
**Answer:**
- Proxies thode slow hain normal objects se
- Critical performance code mein avoid karo
- Par modern apps mein usually negligible hai

### **Q4: Revocable Proxy kya hai?**
```javascript
const {proxy, revoke} = Proxy.revocable(target, handler);

proxy.name = 'Ali';  // Works
revoke();            // Proxy ko disable kar diya
proxy.name;          // ❌ TypeError: Cannot perform 'get'
```

### **Q5: Reflect kyun use karein handler mein?**
**Answer:**
```javascript
// ❌ Bad - direct assignment
set(target, prop, value) {
  target[prop] = value;
  return true;
}

// ✅ Good - Reflect use karo
set(target, prop, value, receiver) {
  return Reflect.set(target, prop, value, receiver);
}
```
Kyunki `receiver` parameter inheritance mein important hai!

---

## **🔥 QUICK REVISION (Interview se pehle)**

```javascript
// PROXY PATTERN
const proxy = new Proxy(target, {
  get(target, prop, receiver) {
    // Property access intercept
    return Reflect.get(target, prop, receiver);
  },
  
  set(target, prop, value, receiver) {
    // Property assignment intercept
    return Reflect.set(target, prop, value, receiver);
  },
  
  has(target, prop) {
    // 'in' operator intercept
    return Reflect.has(target, prop);
  }
});
```

**Remember:** 
- Proxy = Interceptor
- Reflect = Default behavior with better API
- Always return proper values from traps
- Use `receiver` parameter in get/set

Yeh notes rakh lo, interview mein confident rahoge! 💪
