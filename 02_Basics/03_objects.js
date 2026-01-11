//singleton object

//object literals syntax


const mySym = Symbol("key1");

const person = {
    name: "Saurabh",
    "full name": "Saurabh Kumar",
    [mySym]: "myValue1",
    age: 22,
    city: "Delhi",
    email:"saurabh@example.com",
    isLogin: true,
    skills: ["JavaScript", "React", "Node.js"],
    lastLogin:[monday="Monday",tuesday="Tuesday",wednesday="Wednesday"]
};

// console.log(person.email);
// console.log(person["email"]);
// console.log(person["full name"]);
// console.log(typeof person [mySym]);

//Object.freeze(person); //prevents modification of object
//person.email = "soljar@gmail.com"; //updating email
// console.log(person.email);
// console.log(person);

//SRING INTERPOLATION (`THIS IS TEMPLATE LITERAL SYNTAX`) USE BACKTICKS
// console.log(`The email of ${person["full name"]} is ${person.email}`);

person.greeting =function(){
    console.log("Hello there!");
}
person.greetingTwo =function(){
    console.log(`Hello there! ${this["full name"]}`);
}

console.log(person.greeting);
console.log(person.greetingTwo());