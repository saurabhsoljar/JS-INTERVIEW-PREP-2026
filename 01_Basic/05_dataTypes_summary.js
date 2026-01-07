/*
Basicaly there are 2 types of data in ja 
1. Primitive Data Types
2. Non-Primitive Data Types


Primitive Data Types:
7 types of primitive data types in javaScript
1. Number- represents both integer and floating-point numbers
2. String- represents a sequence of characters  
3. Boolean- represents logical entities and can have two values: true or false
4. Undefined- a variable that has been declared but not assigned a value
5. Null- represents the intentional absence of any object value
6. BigInt- used to represent integers larger than the maximum safe integer in JavaScript
7. Symbol- used to create unique identifiers


Non-Primitive Data Types(Refrence Data Types):
1. Object- a collection of properties, where each property is defined as a key-value pair
2. Array- a special type of object used to store ordered collections of values
3. Function- a block of code designed to perform a particular task, which can be treated as a data type in JavaScript

JavaScript is a dynamically typed language, meaning that variables can hold values of any data type without explicit type declarations. The type of a variable is determined at runtime based on the value assigned to it.

Undefined-"undefined" is a primitive data type in JavaScript that represents a variable that has been declared but has not yet been assigned a value. When a variable is declared without an initial value, it is automatically assigned the value "undefined" by JavaScript.
Null-"null" is a primitive data type in JavaScript that represents the intentional absence of any object value. It is used to indicate that a variable should not point to any object or value. When a variable is explicitly assigned the value "null", it signifies that the variable is empty or has no value.
Number-"number" is a primitive data type in JavaScript that represents both integer and floating-point numbers. JavaScript uses a single number type to handle all numeric values, which are stored as 64-bit floating-point values according to the IEEE 754 standard. This means that JavaScript can represent a wide range of numeric values, including positive and negative integers, decimals, and special values like NaN (Not-a-Number) and Infinity.
Boolean-"boolean" is a primitive data type in JavaScript that represents logical entities and can have one of two values: true or false. Booleans are commonly used in conditional statements and logical operations to control the flow of a program based on certain conditions.
String-"string" is a primitive data type in JavaScript that represents a sequence of characters. Strings are used to store and manipulate text-based data. They can include letters, numbers, symbols, and whitespace characters. Strings in JavaScript are enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
Object-"object" is a non-primitive data type in JavaScript that represents a collection of properties, where each property is defined as a key-value pair. Objects are used to store and organize related data and functionality. They can contain various data types, including other objects, arrays, functions, and primitive values. Objects are created using curly braces ({ }) and properties are accessed using dot notation or bracket notation.
Functon-"function" is a non-primitive data type in JavaScript that represents a block of code designed to perform a particular task. Functions are reusable pieces of code that can be defined once and called multiple times throughout a program. They can accept input parameters, perform operations, and return output values. Functions in JavaScript are first-class citizens, meaning they can be assigned to variables, passed as arguments to other functions, and returned from other functions.



🧠 Very Important Interview Notes

⚠️ Special cases (Tricky!)

typeof null        // "object" ❌ (JS bug)
typeof []          // "object"
typeof function(){}// "function"
typeof NaN         // "number"



* from interview point of view

📌 JavaScript Data Types – Complete Interview Guide

✅ JavaScript has 2 main categories of data types

1.Primitive Data Types

2.Non-Primitive (Reference) Data Types


🔹 1. Primitive Data Types (7 types)

Primitive types store single values and are immutable (cannot be changed directly).


1️⃣ Number
Represents integer and floating-point numbers

let age = 25
let price = 99.99

console.log(age, price)

How it works
-JavaScript uses one number type
-Stored as 64-bit floating point (IEEE 754)

Special values:
console.log(10 / 0)     // Infinity
console.log("abc" / 2) // NaN

2️⃣ String
Represents text/character
let name = "Saurabh"
let city = 'Patna'
let intro = `My name is ${name}`

console.log(intro)

How it works
-Stored as sequence of characters
-Strings are immutable

3️⃣ Boolean
Represents true or false

let isLoggedIn = true
let hasToken = false

Used in conditions:
if (isLoggedIn) {
  console.log("Welcome")
}
How it works
-Used for logical operations
-Results from comparisons

4️⃣ Undefined
Declared but not assigned a value

let x
console.log(x) // undefined
How it works
-Default value for uninitialized variables
-Indicates absence of value
-JavaScript assigns undefined automatically

5️⃣ Null
Represents intentional absence of value

let user = null
console.log(user)

Important interview point
typeof null // "object" ❌ (JavaScript bug)

How it works
-Explicitly assigned to indicate no value
-Different from undefined

6️⃣ BigInt
Used for very large integers

let bigNumber = 12345678901234567890n
console.log(bigNumber)

Why needed?
Number.MAX_SAFE_INTEGER // 9007199254740991

Beyond this → use BigInt

How it works
-Can represent integers beyond safe limit
-Operations with BigInt must use BigInt values


7️⃣ Symbol
Used to create unique identifiers

let id1 = Symbol("id")
let id2 = Symbol("id")

console.log(id1 === id2) // false

How it works
-Each Symbol is unique
-Used for object property keys to avoid name collisions
-Mainly used in advanced JS / libraries


🔹 2. Non-Primitive (Reference) Data Types
Stored as reference in memory, not value.

1️⃣ Object
Collection of key-value pairs

let person = {
  name: "Saurabh",
  age: 25,
  isDeveloper: true
}

console.log(person.name)

How it works
-Used to group related data
-Properties can hold any data type
-Mutable (can be changed)
-Stored in heap memory
-Variable stores reference



2️⃣ Array
Ordered collection of values

let numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]) // 1

Arrays are objects:
typeof numbers // "object"


How it works
-Indexed collection
-Can hold mixed data types
-Mutable and dynamic size

3️⃣ Function
Reusable block of code
Functions are first-class citizens

function greet(name) {
  return "Hello " + name
}

console.log(greet("Saurabh"))


Functions can be:
Stored in variables
Passed as arguments
Returned from other functions

How it works
-Encapsulates logic
-Can have parameters and return values
-Mutable and dynamic

🎯 INTERVIEW QUESTIONS & ANSWERS
❓ Q1: How many data types in JavaScript?

✅ Answer:
JavaScript has 8 data types:
7 primitive and 1 non-primitive (Object).

❓ Q2: Is JavaScript statically or dynamically typed?

✅ Answer:
JavaScript is dynamically typed, because variable types are decided at runtime.

❓ Q2: Is JavaScript statically or dynamically typed?

✅ Answer:
JavaScript is dynamically typed, because variable types are decided at runtime.

❓ Q4: Is NaN a data type?

✅ Answer:
No. NaN is a special number value.
typeof NaN // "number"

❓ Q5: Why functions are called first-class citizens?

✅ Answer:
Because functions can be assigned to variables, passed as arguments, and returned from other functions.

❓ Q6: Why objects are called reference types?

✅ Answer:
Because variables store memory reference, not the actual value.

🏆 One-Line Interview Summary (Powerful)

JavaScript is a dynamically typed language with eight data types: 
seven primitive types and one non-primitive object type, where 
primitives store values directly and objects store references.

*/