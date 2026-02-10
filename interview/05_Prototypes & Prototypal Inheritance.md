# Prototypes & Prototypal Inheritance in JavaScript

Let me break down these fundamental JavaScript concepts that often come up in interviews.

## Why "Everything is an Object" in JavaScript

This statement is *almost* true. Here's the nuance:

**Primitives vs Objects:**
- Primitives (string, number, boolean, null, undefined, symbol, bigint) are NOT objects
- However, primitives have "wrapper objects" that give them object-like behavior

```javascript
let str = "hello";
console.log(str.toUpperCase()); // "HELLO"
// JavaScript temporarily wraps "hello" in a String object
```

**Functions are Objects:**
Functions in JavaScript are first-class objects, meaning they can have properties and methods.

```javascript
function greet() {
  console.log("Hi");
}

greet.language = "English"; // Adding a property to a function
console.log(greet.language); // "English"
console.log(typeof greet); // "function" (but it's still an object)
```

## How `__proto__` Works

`__proto__` is the actual object that is used in the lookup chain to resolve methods and properties. It's the reference to the prototype.

**The Prototype Chain:**

```javascript
let obj = { name: "Alice" };

console.log(obj.__proto__); // Object.prototype
console.log(obj.__proto__.__proto__); // null (end of chain)
```

**Visual representation:**
```
obj → Object.prototype → null
```

When you access a property on `obj`, JavaScript:
1. Looks on `obj` itself
2. If not found, looks on `obj.__proto__` (Object.prototype)
3. If not found, looks on `obj.__proto__.__proto__` (null - end of chain)
4. Returns `undefined` if not found anywhere

## Prototype Chain Examples

### Arrays

```javascript
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null
```

**Chain:**
```
arr → Array.prototype → Object.prototype → null
```

This is why arrays have access to both Array methods (`.push()`, `.map()`) and Object methods (`.toString()`, `.hasOwnProperty()`).

### Functions

```javascript
function sayHi() {}

console.log(sayHi.__proto__ === Function.prototype); // true
console.log(sayHi.__proto__.__proto__ === Object.prototype); // true
console.log(sayHi.__proto__.__proto__.__proto__); // null
```

**Chain:**
```
sayHi → Function.prototype → Object.prototype → null
```

### Custom Objects

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

let john = new Person("John");

console.log(john.__proto__ === Person.prototype); // true
console.log(john.__proto__.__proto__ === Object.prototype); // true
```

**Chain:**
```
john → Person.prototype → Object.prototype → null
```

## `__proto__` vs `prototype`

This is a common source of confusion:

- **`prototype`**: A property on constructor functions that becomes the `__proto__` of instances created by that constructor
- **`__proto__`**: The actual prototype object used in the lookup chain

```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function() {
  console.log("Woof!");
};

let myDog = new Dog("Rex");

console.log(myDog.prototype); // undefined (instances don't have .prototype)
console.log(myDog.__proto__); // Dog.prototype
console.log(Dog.prototype); // { bark: function, constructor: Dog }
```

## Modern Approach: `Object.getPrototypeOf()` and `Object.setPrototypeOf()`

While `__proto__` works, it's better to use standard methods:

```javascript
let obj = {};

// Get prototype
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// Set prototype
let parent = { greeting: "Hello" };
let child = {};
Object.setPrototypeOf(child, parent);

console.log(child.greeting); // "Hello" (inherited from parent)
```

## Common Interview Questions

**Q: What happens when you access a property?**

```javascript
let person = {
  name: "Alice"
};

console.log(person.toString()); // [object Object]
// toString is not on person, so JS looks up the chain
// Finds it on Object.prototype
```

**Q: How to check if a property exists on the object itself vs inherited?**

```javascript
let obj = { name: "Bob" };

console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)
```

**Q: Everything inherits from Object.prototype?**

Almost! The exception:

```javascript
let obj = Object.create(null); // No prototype
console.log(obj.__proto__); // undefined
console.log(obj.toString); // undefined (no inherited methods)
```

This is useful for creating truly "clean" objects, often used as dictionaries or maps.

# Deep Dive: Prototypes, `__proto__`, and "Everything is an Object"

Let me explain these concepts thoroughly with clear examples.

## Part 1: Is "Everything is an Object" TRUE or FALSE?

### ❌ **FALSE** - Not everything is an object

JavaScript has **two main categories**:

### 1. **Primitives** (NOT objects)
```javascript
let str = "hello";        // string primitive
let num = 42;             // number primitive
let bool = true;          // boolean primitive
let nothing = null;       // null primitive
let notDefined = undefined; // undefined primitive
let sym = Symbol('id');   // symbol primitive
let big = 10n;            // bigint primitive

console.log(typeof str);  // "string" (not object)
console.log(typeof num);  // "number" (not object)
```

### 2. **Objects** (actual objects)
```javascript
let obj = { name: "Alice" };     // object
let arr = [1, 2, 3];             // object (array)
let func = function() {};        // object (function)
let date = new Date();           // object
```

### 🤔 BUT... Primitives *Behave* Like Objects

This is the confusing part! Primitives can access methods:

```javascript
let str = "hello";
console.log(str.toUpperCase()); // "HELLO" ✅ Works!
console.log(str.length);        // 5 ✅ Works!
```

**How?** JavaScript uses **"auto-boxing"** (wrapper objects):

```javascript
// What you write:
let str = "hello";
str.toUpperCase();

// What JavaScript does behind the scenes:
let str = "hello";
new String(str).toUpperCase(); // Creates temporary String object
// Then throws away the wrapper object
```

**Proof that primitives are NOT objects:**

```javascript
let str = "hello";
str.customProperty = "test";
console.log(str.customProperty); // undefined ❌

// Why? Because:
// 1. JS wraps "hello" in String object temporarily
// 2. Adds customProperty to that temporary object
// 3. Throws away the temporary object
// 4. When you access it again, it's a NEW wrapper (without customProperty)
```

But actual objects retain properties:

```javascript
let obj = new String("hello");
obj.customProperty = "test";
console.log(obj.customProperty); // "test" ✅
```

---

## Part 2: How `prototype` and `__proto__` Work

### Understanding the Relationship

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hi, I'm ${this.name}`);
};

let john = new Person("John");
```

**Visual Diagram:**

```
┌─────────────────────────────────────────────┐
│ Person (constructor function)               │
│ - prototype ──────────┐                     │
└───────────────────────│─────────────────────┘
                        │
                        ▼
         ┌──────────────────────────────┐
         │ Person.prototype (object)    │
         │ - sayHello: function         │
         │ - constructor: Person        │
         └──────────────────────────────┘
                        ▲
                        │
                        │ __proto__
                        │
         ┌──────────────────────────────┐
         │ john (instance)              │
         │ - name: "John"               │
         │ - __proto__ ─────────────────┘
         └──────────────────────────────┘
```

### Key Concept:

- **`prototype`** is a property on **constructor functions**
- **`__proto__`** is a property on **instances** (all objects)
- When you create an instance with `new`, the instance's `__proto__` points to the constructor's `prototype`

### Detailed Example:

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};

let alice = new Person("Alice");

// Relationships:
console.log(alice.__proto__ === Person.prototype); // true ✅
console.log(Person.prototype.constructor === Person); // true ✅

// alice doesn't have greet method directly:
console.log(alice.hasOwnProperty('greet')); // false

// But can access it through prototype chain:
alice.greet(); // "Hello, I'm Alice" ✅
```

### How Property Lookup Works:

```javascript
alice.greet();

// Step-by-step lookup:
// 1. Does alice have 'greet'? NO
// 2. Does alice.__proto__ (Person.prototype) have 'greet'? YES ✅
// 3. Execute it!
```

```javascript
alice.toString();

// Step-by-step lookup:
// 1. Does alice have 'toString'? NO
// 2. Does alice.__proto__ (Person.prototype) have 'toString'? NO
// 3. Does alice.__proto__.__proto__ (Object.prototype) have 'toString'? YES ✅
// 4. Execute it!
```

---

## Part 3: The Complete Prototype Chain

### For Regular Objects:

```javascript
let obj = { name: "Test" };

console.log(obj.__proto__ === Object.prototype); // true
console.log(obj.__proto__.__proto__); // null (end of chain)
```

**Chain:**
```
obj → Object.prototype → null
```

### For Arrays:

```javascript
let arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype); // true
console.log(arr.__proto__.__proto__ === Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null
```

**Chain:**
```
arr → Array.prototype → Object.prototype → null
```

This is why arrays have:
- Array methods: `push`, `pop`, `map`, `filter` (from Array.prototype)
- Object methods: `toString`, `hasOwnProperty` (from Object.prototype)

### For Functions:

```javascript
function myFunc() {}

console.log(myFunc.__proto__ === Function.prototype); // true
console.log(myFunc.__proto__.__proto__ === Object.prototype); // true
console.log(myFunc.__proto__.__proto__.__proto__); // null
```

**Chain:**
```
myFunc → Function.prototype → Object.prototype → null
```

### For Custom Constructors:

```javascript
function Animal(type) {
  this.type = type;
}

Animal.prototype.describe = function() {
  return `This is a ${this.type}`;
};

let dog = new Animal("dog");

console.log(dog.__proto__ === Animal.prototype); // true
console.log(dog.__proto__.__proto__ === Object.prototype); // true
console.log(dog.__proto__.__proto__.__proto__); // null
```

**Chain:**
```
dog → Animal.prototype → Object.prototype → null
```

---

## Part 4: Practical Examples

### Example 1: Adding Methods to Built-in Types

```javascript
// Adding a method to all arrays
Array.prototype.last = function() {
  return this[this.length - 1];
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // 5 ✅

// All arrays now have this method through the prototype chain
```

### Example 2: Inheritance

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} says Woof!`);
};

let buddy = new Dog("Buddy", "Golden Retriever");

buddy.eat();  // "Buddy is eating" (inherited from Animal)
buddy.bark(); // "Buddy says Woof!" (from Dog)

// Prototype chain:
console.log(buddy.__proto__ === Dog.prototype); // true
console.log(buddy.__proto__.__proto__ === Animal.prototype); // true
console.log(buddy.__proto__.__proto__.__proto__ === Object.prototype); // true
```

**Chain:**
```
buddy → Dog.prototype → Animal.prototype → Object.prototype → null
```

### Example 3: Checking the Prototype Chain

```javascript
function Person(name) {
  this.name = name;
}

let alice = new Person("Alice");

// Different ways to check:
console.log(alice instanceof Person); // true
console.log(alice instanceof Object); // true
console.log(Person.prototype.isPrototypeOf(alice)); // true
console.log(Object.prototype.isPrototypeOf(alice)); // true
```

---

## Part 5: `prototype` vs `__proto__` Summary Table

| Feature | `prototype` | `__proto__` |
|---------|------------|-------------|
| **Exists on** | Constructor functions only | All objects |
| **Purpose** | Template for instances | Link in prototype chain |
| **When set** | When function is created | When object is created |
| **Used by** | `new` operator | Property lookup |

```javascript
function Car() {}

// Constructor has 'prototype':
console.log(typeof Car.prototype); // "object" ✅

let myCar = new Car();

// Instance has '__proto__':
console.log(myCar.__proto__ === Car.prototype); // true ✅

// Instance does NOT have 'prototype':
console.log(myCar.prototype); // undefined ❌
```

---

## Quick Answer Summary:

1. **"Everything is an Object"** = ❌ **FALSE**
   - Primitives are NOT objects, but can behave like them via auto-boxing

2. **`prototype`** = Property on constructor functions that serves as a template

3. **`__proto__`** = Link that connects objects in the prototype chain

4. **Prototype chain** = How JavaScript looks up properties and methods by traversing `__proto__` links until it finds the property or reaches `null`