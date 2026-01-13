//Immediately Invoked Function Expressions (IIFE) are functions that are executed right after they are defined. They are often used to create a new scope and avoid polluting the global namespace.
// IIFE Example

// function chai(){
//     console.log(` DB connected`);
// }
// chai(); // DB connected

// IIFE Example
//this is name iffe function
// (function chai(){
//     console.log(` DB connected`);
// })()

//Q-why used IIFE
// 1. Avoiding Global Scope Pollution
// 2. Data Privacy
// 3. Initialization Code

/*
NOTE:
in iife used ; at the end to avoid any error
example ();
(function chai(){
    console.log(` DB connected`);
})();

*/

// this is unnamed iffe function or without name iffe function
( (name)=>{
    console.log(`Hello ${name}, DB connected`);
})("mongoDB");
