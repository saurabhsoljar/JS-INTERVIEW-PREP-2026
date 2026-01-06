let score ="50abc"

// console.log(typeof score);
// console.log(typeof(score));


let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "50"=> 50
//"50abc" => NaN

let isLoggedIn = 0

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
// 1 => true
// 0 => false

//"" => false
// "abc" => true
// " " => true


let someNumber = 1234

let stringNumber = String(someNumber)
console.log(typeof stringNumber);
console.log(stringNumber);
// 1234 => "1234"

//2. JavaScript Type Conversion (Simple Explanation)

//String → Number
Number("50")      // 50
Number("50abc")  // NaN
Number("abc")    // NaN
Number("")       // 0
Number(" ")      // 0

//Number → Boolean
Boolean(1)    // true
Boolean(0)    // false
Boolean(-1)   // true
Boolean(100)  // true

//String → Boolean
Boolean("")      // false
Boolean("abc")   // true
Boolean(" ")     // true (space is still a value)


//Number → String
String(1234)    // "1234"
String(0)       // "0"
String(-567)    // "-567"

// 3. MORE Practice Code (Very Important)
// 🔥 Example 1: undefined & null
Number(undefined)  // NaN
Number(null)       // 0

Boolean(undefined) // false
Boolean(null)      // false

String(undefined)  // "undefined"
String(null)       // "null"


//🔥 Example 2: NaN behavior

let x = Number("abc")
console.log(x)           // NaN
console.log(typeof x)    // number (IMPORTANT!)


//👉 Interview trap: typeof NaN is "number"

//🔥 Example 3: Boolean tricky cases

Boolean([])    // true
Boolean({})    // true
Boolean("0")   // true
Boolean(0)     // false
Boolean("")    // false
Boolean(" ")   // true

/*  
🎯 INTERVIEW QUESTIONS & ANSWERS
❓ Q1: What is NaN?

✅ Answer:
NaN means Not a Number. It is returned when a numeric operation fails.

❓ Q2: Is NaN a number?

✅ Answer:
Yes.

typeof NaN === "number" // true

❓ Q3: How to check if a value is NaN?          
✅ Answer:
Use the built-in isNaN() function.

❓ Q3: Difference between null and undefined?

✅ Answer:

null → intentional empty value

undefined → variable declared but not assigned

❓ Q4: What is truthy and falsy?

✅ Answer:
Falsy values:

false, 0, "", null, undefined, NaN


Everything else is truthy.

❓ Q5: What happens when converting "50abc" to Number?

✅ Answer:
It results in NaN because the string is not purely numeric.

🏆 One-Line Interview Answer (Powerful)

JavaScript performs type conversion using constructors like Number(), Boolean(), and String(). If conversion fails, it returns NaN, and some values are treated as truthy or falsy.

*/