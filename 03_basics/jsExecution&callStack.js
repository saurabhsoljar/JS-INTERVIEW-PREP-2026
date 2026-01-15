let val1=10
let val2=20

function addNum(num1, num2) {
   let total = num1 + num2
   return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(5, 15)

console.log("Result 1: " + result1)   // Output: Result 1: 30
console.log("Result 2: " + result2)  // Output: Result 2: 20

//how JavaScript executes this code?
// When the JavaScript engine encounters this code, it follows these steps:
// 1. Global Execution Context Creation:
//    - The engine creates a global execution context.
//    - It allocates memory for global variables (val1, val2, addNum) and sets up the scope chain.
// 2. Function Declaration:
//    - The engine encounters the function declaration for addNum.
//    - It stores the function definition in memory, associating it with the name addNum.
// 3. Variable Assignment:
//    - The engine assigns the values 10 and 20 to val1 and val2, respectively.
// 4. Function Invocation (First Call):
//    - The engine encounters the first function call addNum(val1, val2).
//    - It creates a new execution context for this function call.
//    - It allocates memory for the function's parameters (num1, num2) and local variable (total).
//    - It assigns the values of val1 and val2 (10 and 20) to num1 and num2.
//    - It executes the function body, calculates the total (30), and returns this value.

//callstack visualization for first call:
// Global Execution Context
// ├── val1: 10 
// ├── val2: 20
// └── addNum: function addNum(num1, num2)
//     └── Function Execution Context (addNum)
//         ├── num1: 10
//         ├── num2: 20
//         └── total: 30    

//callstack Worker
/*
🧠 What is Call Stack in JavaScript?

👉 Call Stack is a data structure that keeps track of
which function is currently running and
what should run next.

JavaScript uses LIFO rule:

Last In, First Out

🔹 How Call Stack Works (Basic Rule)

When a function is called → it is pushed into the stack

When function finishes → it is popped out of the stack

Stack is empty → program ends


🧵 Call Stack & Single-Threaded Nature

JavaScript is single-threaded:

One call stack

One task at a time

No parallel execution

🧠 Interview Questions & Answers
❓ Q1: What is Call Stack?

✅ Answer:
Call stack is a mechanism that keeps track of function calls using LIFO order.

❓ Q2: Is JavaScript multi-threaded?

✅ Answer:
No. JavaScript is single-threaded and uses one call stack.

❓ Q3: What causes stack overflow?

✅ Answer:
Too many nested or infinite function calls.

❓ Q4: Does setTimeout go into call stack?

✅ Answer:
No. Its callback goes to the queue and enters the stack only when it’s empty.

🏆 One-Line Interview Answer (Strong)

The call stack is a LIFO data structure that manages function execution in JavaScript by pushing function calls and popping them once execution is complete.


🔑 Key Points to Remember

✔ Call Stack uses LIFO
✔ JS executes one function at a time
✔ Deep recursion → stack overflow
✔ Async code waits for stack to be empty



*/