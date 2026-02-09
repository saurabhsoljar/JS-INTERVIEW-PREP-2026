# JavaScript Objects - Complete Guide

Let me explain **Object Literals, Constructor Functions, and ES6 Classes** with proper syntax and examples.

---

## 1. Object Literal (Using `{}`)

### ✅ Correct Syntax

```javascript
const person = {
    fname: "Saurabh",        // Use : not =
    lname: "Kumar",          // Use : not =
    contact: "8789883658",   // Use : not =
    
    // Method (function inside object)
    getFullName: function() {
        return this.fname + " " + this.lname;
    },
    
    // ES6 shorthand method
    displayInfo() {
        console.log(`${this.fname} ${this.lname} - ${this.contact}`);
    },
    
    // Arrow function (be careful with 'this')
    getContact: () => {
        // Arrow functions don't have their own 'this'
        return this.contact; // ❌ Won't work as expected
    }
};

// Accessing properties
console.log(person.fname);           // "Saurabh"
console.log(person["lname"]);        // "Kumar"

// Calling methods
console.log(person.getFullName());   // "Saurabh Kumar"
person.displayInfo();                // Saurabh Kumar - 8789883658
```

### ❌ Your Code (Had Errors)

```javascript
// WRONG - Don't use =, use :
const person = {
    fname = "saurabh",     // ❌ Wrong
    lname = "kumar",       // ❌ Wrong
    contact = "8789883658", // ❌ Wrong
    function( () => {      // ❌ Wrong syntax
        
    })
}
```

---

## 2. Creating Objects - Three Ways

### **Way 1: Object Literal** (Direct creation)

```javascript
const user = {
    name: "Saurabh",
    age: 25,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

user.greet(); // Hi, I'm Saurabh
```

**Use Case:** Creating **single objects** quickly.

---

### **Way 2: Constructor Function** (PascalCase)

```javascript
// Constructor Function - PascalCase
function Person(fname, lname, contact) {
    // Properties
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    
    // Method
    this.getFullName = function() {
        return this.fname + " " + this.lname;
    };
    
    this.displayInfo = function() {
        console.log(`${this.fname} ${this.lname} - ${this.contact}`);
    };
}

// Creating objects using 'new' keyword
const person1 = new Person("Saurabh", "Kumar", "8789883658");
const person2 = new Person("Rahul", "Sharma", "9876543210");

console.log(person1.getFullName()); // "Saurabh Kumar"
person2.displayInfo();              // Rahul Sharma - 9876543210
```

**Use Case:** Creating **multiple similar objects** (like a template).

---

### **Way 3: ES6 Class** (Modern - PascalCase)

```javascript
// ES6 Class - PascalCase
class Person {
    // Constructor method
    constructor(fname, lname, contact) {
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    
    // Methods
    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
    
    displayInfo() {
        console.log(`${this.fname} ${this.lname} - ${this.contact}`);
    }
    
    // Getter
    get fullName() {
        return `${this.fname} ${this.lname}`;
    }
    
    // Setter
    set fullName(name) {
        const parts = name.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
    
    // Static method (called on class, not instance)
    static compareAge(person1, person2) {
        return person1.age - person2.age;
    }
}

// Creating objects
const person1 = new Person("Saurabh", "Kumar", "8789883658");
const person2 = new Person("Rahul", "Sharma", "9876543210");

console.log(person1.getFullName());  // "Saurabh Kumar"
person2.displayInfo();               // Rahul Sharma - 9876543210

// Using getter
console.log(person1.fullName);       // "Saurabh Kumar"

// Using setter
person1.fullName = "Amit Verma";
console.log(person1.fname);          // "Amit"
```

**Use Case:** **Modern, cleaner syntax** for creating objects with inheritance.

---

## Complete Comparison

### Example: Creating a User System

#### **1. Object Literal**

```javascript
const user1 = {
    name: "Saurabh",
    email: "saurabh@example.com",
    age: 25,
    
    login() {
        console.log(`${this.name} logged in`);
    }
};

const user2 = {
    name: "Rahul",
    email: "rahul@example.com",
    age: 30,
    
    login() {
        console.log(`${this.name} logged in`);
    }
};

// ❌ Problem: Code repetition!
```

---

#### **2. Constructor Function**

```javascript
function User(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
    
    this.login = function() {
        console.log(`${this.name} logged in`);
    };
}

const user1 = new User("Saurabh", "saurabh@example.com", 25);
const user2 = new User("Rahul", "rahul@example.com", 30);

user1.login(); // Saurabh logged in
user2.login(); // Rahul logged in

// ✅ Better: Reusable template
```

**Problem with this approach:**
```javascript
// Each object gets its own copy of the method
console.log(user1.login === user2.login); // false (different functions)

// Better: Use prototype
User.prototype.login = function() {
    console.log(`${this.name} logged in`);
};

console.log(user1.login === user2.login); // true (same function)
```

---

#### **3. ES6 Class** (✅ Best Practice)

```javascript
class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    
    login() {
        console.log(`${this.name} logged in`);
    }
    
    logout() {
        console.log(`${this.name} logged out`);
    }
    
    get info() {
        return `${this.name} (${this.age})`;
    }
}

const user1 = new User("Saurabh", "saurabh@example.com", 25);
const user2 = new User("Rahul", "rahul@example.com", 30);

user1.login();        // Saurabh logged in
console.log(user1.info); // Saurabh (25)

// Methods are shared via prototype
console.log(user1.login === user2.login); // true
```

---

## Naming Conventions

### **camelCase** - Regular Functions & Variables

```javascript
// Variables
let userName = "Saurabh";
let userAge = 25;

// Functions
function getAge() {
    return 25;
}

function addNumbers(a, b) {
    return a + b;
}

function printThis() {
    console.log(this);
}

function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}
```

---

### **PascalCase** - Constructors & Classes

```javascript
// Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

// ES6 Classes
class User {
    constructor(name) {
        this.name = name;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }
}

class CarFactory {
    constructor(brand) {
        this.brand = brand;
    }
}
```

**Why PascalCase for Constructors/Classes?**
- Signals that you should use `new` keyword
- Convention to distinguish from regular functions

---

## Key Differences

### Object Literal vs Constructor vs Class

```javascript
// 1. OBJECT LITERAL - Single object
const dog1 = {
    name: "Tommy",
    bark() {
        console.log("Woof!");
    }
};

// Problem: Can't create multiple dogs easily

// 2. CONSTRUCTOR FUNCTION - Multiple objects
function Dog(name) {
    this.name = name;
    this.bark = function() {
        console.log("Woof!");
    };
}

const dog2 = new Dog("Tommy");
const dog3 = new Dog("Buddy");

// 3. ES6 CLASS - Modern, cleaner syntax
class Dog {
    constructor(name) {
        this.name = name;
    }
    
    bark() {
        console.log("Woof!");
    }
}

const dog4 = new Dog("Tommy");
const dog5 = new Dog("Buddy");
```

---

## Complete Real-World Example

### Building a Bank Account System

```javascript
class BankAccount {
    // Private field (ES2022)
    #balance;
    
    constructor(accountHolder, initialBalance) {
        this.accountHolder = accountHolder;
        this.#balance = initialBalance;
        this.transactions = [];
    }
    
    // Deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }
        
        this.#balance += amount;
        this.transactions.push({
            type: 'deposit',
            amount: amount,
            date: new Date()
        });
        
        console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
    }
    
    // Withdraw money
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }
        
        this.#balance -= amount;
        this.transactions.push({
            type: 'withdrawal',
            amount: amount,
            date: new Date()
        });
        
        console.log(`Withdrawn ₹${amount}. New balance: ₹${this.#balance}`);
    }
    
    // Getter for balance (read-only)
    get balance() {
        return this.#balance;
    }
    
    // Get statement
    getStatement() {
        console.log(`\n--- Statement for ${this.accountHolder} ---`);
        this.transactions.forEach(t => {
            console.log(`${t.type}: ₹${t.amount} on ${t.date.toLocaleDateString()}`);
        });
        console.log(`Current Balance: ₹${this.#balance}\n`);
    }
    
    // Static method
    static compareFunds(account1, account2) {
        return account1.balance - account2.balance;
    }
}

// Usage
const account1 = new BankAccount("Saurabh Kumar", 10000);
const account2 = new BankAccount("Rahul Sharma", 5000);

account1.deposit(2000);    // Deposited ₹2000. New balance: ₹12000
account1.withdraw(500);    // Withdrawn ₹500. New balance: ₹11500
account1.getStatement();

console.log(account1.balance); // 11500 (using getter)

// account1.#balance = 50000; // ❌ Error: Private field

// Static method
const diff = BankAccount.compareFunds(account1, account2);
console.log(`Difference: ₹${diff}`); // Difference: ₹6500
```

---

## Interview Questions

### **Q1: What's the difference between Object Literal and Constructor?**

**Answer:**

```javascript
// Object Literal - One-time object
const user = {
    name: "Saurabh",
    greet() { console.log("Hi"); }
};

// Constructor - Reusable template
function User(name) {
    this.name = name;
}

const user1 = new User("Saurabh");
const user2 = new User("Rahul"); // Can create multiple
```

---

### **Q2: Why use Classes over Constructor Functions?**

**Answer:**

```javascript
// Constructor Function
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hi, I'm ${this.name}`);
};

// ES6 Class (cleaner, more intuitive)
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

// Classes provide:
// 1. Cleaner syntax
// 2. Built-in inheritance with 'extends'
// 3. Static methods
// 4. Getters/Setters
// 5. Private fields
```

---

### **Q3: What happens if you forget 'new'?**

```javascript
function Person(name) {
    this.name = name;
}

const person1 = new Person("Saurabh"); // ✅ Correct
console.log(person1.name); // "Saurabh"

const person2 = Person("Rahul"); // ❌ Forgot 'new'
console.log(person2); // undefined
console.log(window.name); // "Rahul" (polluted global!)

// Fix: Use class (throws error without 'new')
class User {
    constructor(name) {
        this.name = name;
    }
}

const user = User("Test"); // ❌ TypeError: Class constructor cannot be invoked without 'new'
```

---

## Summary

| Feature | Object Literal | Constructor Function | ES6 Class |
|---------|---------------|---------------------|-----------|
| **Syntax** | `{}` | `function Person()` | `class Person` |
| **Use Case** | Single object | Multiple objects | Multiple objects (modern) |
| **Naming** | camelCase | PascalCase | PascalCase |
| **Reusability** | ❌ Low | ✅ High | ✅ High |
| **Inheritance** | ❌ No | ⚠️ Prototype chain | ✅ `extends` keyword |
| **Private fields** | ❌ No | ❌ No | ✅ `#field` |
| **this binding** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Modern** | ✅ Always valid | ⚠️ Old way | ✅ Recommended |

---

## Best Practices

✅ Use **Object Literal** for single, unique objects  
✅ Use **ES6 Class** for creating multiple similar objects  
✅ Use **camelCase** for functions and variables  
✅ Use **PascalCase** for constructors and classes  
✅ Always use `new` with constructors/classes  
✅ Use private fields `#` for data encapsulation  

Ab aap objects ko properly create kar sakte ho! 🚀