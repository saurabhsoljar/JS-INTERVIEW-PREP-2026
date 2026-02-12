I'll explain these JavaScript concepts from an interview preparation perspective, covering what interviewers typically ask and what you need to know.

## Functions

**What they are:** Reusable blocks of code that perform specific tasks.

**Key interview points:**

**Function Declaration:**
```javascript
function greet(name) {
    return `Hello, ${name}`;
}
```
- Hoisted (can be called before declaration)
- Has its own `this` context

**Function Expression:**
```javascript
const greet = function(name) {
    return `Hello, ${name}`;
};
```
- Not hoisted
- Must be defined before use

**Common interview questions:**
- "What's the difference between function declaration and expression?" → Hoisting behavior
- "Explain function hoisting" → Declarations are moved to top during compilation phase

---

## Scope

**What it is:** The accessibility/visibility of variables in different parts of code.

**Types you must know:**

**1. Global Scope:**
```javascript
var globalVar = "I'm global";
function test() {
    console.log(globalVar); // accessible
}
```

**2. Function Scope:**
```javascript
function myFunc() {
    var funcVar = "I'm local";
    console.log(funcVar); // works
}
console.log(funcVar); // Error: funcVar is not defined
```

**3. Block Scope (let/const):**
```javascript
if (true) {
    let blockVar = "I'm block scoped";
    var functionVar = "I'm function scoped";
}
console.log(functionVar); // works
console.log(blockVar); // Error
```

**Lexical Scope (Closure concept):**
```javascript
function outer() {
    let outerVar = "outer";
    function inner() {
        console.log(outerVar); // can access parent scope
    }
    return inner;
}
```

**Common interview questions:**
- "What's the difference between var, let, and const?" → Scope and hoisting differences
- "Explain closure" → Inner functions accessing outer function variables
- "What is scope chain?" → How JavaScript looks up variables through nested scopes

---

## Arrow Functions

**What they are:** Shorter syntax for writing functions (ES6+).

**Syntax:**
```javascript
// Traditional
const add = function(a, b) {
    return a + b;
};

// Arrow function
const add = (a, b) => a + b;

// With single parameter (parentheses optional)
const square = x => x * x;

// Multiple statements (need curly braces and return)
const multiply = (a, b) => {
    const result = a * b;
    return result;
};
```

**Critical differences from regular functions:**

**1. No own `this` binding:**
```javascript
const obj = {
    name: "John",
    regularFunc: function() {
        console.log(this.name); // "John"
    },
    arrowFunc: () => {
        console.log(this.name); // undefined (inherits this from outer scope)
    }
};
```

**2. Cannot be used as constructors:**
```javascript
const Person = (name) => {
    this.name = name;
};
new Person("John"); // Error: Person is not a constructor
```

**3. No `arguments` object:**
```javascript
function regular() {
    console.log(arguments); // works
}
const arrow = () => {
    console.log(arguments); // Error
};
```

**Common interview questions:**
- "When should you NOT use arrow functions?" → Methods in objects, constructors, event handlers needing `this`
- "What's the main difference between arrow and regular functions?" → `this` binding
- "Can you use arrow functions as methods?" → Yes, but `this` won't work as expected

---

## IIFE (Immediately Invoked Function Expression)

**What it is:** A function that runs immediately after being defined.

**Syntax:**
```javascript
// Basic IIFE
(function() {
    console.log("I run immediately!");
})();

// With parameters
(function(name) {
    console.log(`Hello, ${name}`);
})("John");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Alternative syntax
(function() {
    console.log("Also valid");
}());
```

**Why use IIFE:**

**1. Avoid global namespace pollution:**
```javascript
(function() {
    var privateVar = "I'm private";
    // privateVar only exists in this scope
})();
console.log(privateVar); // Error
```

**2. Create private variables:**
```javascript
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();

counter.increment(); // 1
counter.increment(); // 2
console.log(counter.count); // undefined (private)
```

**3. Module pattern (before ES6 modules):**
```javascript
const myModule = (function() {
    const privateMethod = () => console.log("private");
    const publicMethod = () => console.log("public");
    
    return {
        public: publicMethod
    };
})();
```

**Common interview questions:**
- "What does IIFE stand for and why use it?" → Privacy, avoid global pollution
- "How was IIFE used before ES6 modules?" → Module pattern
- "What's the syntax of IIFE?" → Function wrapped in parentheses, immediately called

---

## Quick Comparison Table

| Feature | Regular Function | Arrow Function | IIFE |
|---------|-----------------|----------------|------|
| `this` binding | Own context | Inherits from parent | Depends on type used |
| Hoisting | Yes (declarations) | No | N/A |
| Constructor | Yes | No | Rarely |
| `arguments` object | Yes | No | Depends on type used |

**Pro tip for interviews:** Always be ready to write code examples on the spot. Interviewers love asking you to predict output or fix bugs related to these concepts!