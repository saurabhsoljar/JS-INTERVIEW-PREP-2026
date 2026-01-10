"use strict"; //treat all js code as newer version

//alert(3+3); // 6,  we used in browser not nodejs

console.log("saurabh kumar");

let Name = "saurabh kumar"; //string
let age = 21; //number
let isApproved = false; //boolean


//Number =>2 to power 53
//Bignetint => larger than 2 to power 53
let bigNumber = 1234567890123456789012345678901234567890n; //n at the end

//String (using '' or "" or ``)
let firstName = "saurabh";
let lastName = "kumar";

//Boolean
let isLoggedIn = true;
let isLoggedOut = false;

//Null
let empty = null; //value is empty => standalone value (Represent mt intentionally no value)

//Undefined
let undef = undefined; //value is undefined
let undef2; //by default value is undefined

//Symbol
let sym1 = Symbol("my identifier");
let sym2 = Symbol("my identifier");
//console.log(sym1===sym2); //false => unique

//Object
let person = {
  Name: "saurabh kumar",
  age: 21,
  isMarried: false,
};
//console.log(person);


console.log(typeof null);
console.log(typeof undefined);

