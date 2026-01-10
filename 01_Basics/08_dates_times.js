//Dates

let myDate = new Date();
// console.log(myDate.toString()); // Current date and time
// console.log(myDate.toDateString()); // Current date
// console.log(myDate.toTimeString()); // Current time 
// console.log(myDate.toISOString()); // Current date and time in ISO format
// console.log(myDate.toLocaleString()); // Current date and time in local format
// console.log(typeof myDate); // "object"



//Creating specific dates
let specificDate = new Date('2023-01-01T12:00:00Z');
// console.log(specificDate.toString());

let myTimeStamp = Date.now(); // Timestamp in milliseconds
// console.log(myTimeStamp);

let dateFromTimestamp = new Date(myTimeStamp);
//console.log(dateFromTimestamp.toString());

// console.log(myTimeStamp);
// console.log(specificDate.getTime);
// console.log(Date.now()/1000); // Current timestamp in seconds
// console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds (rounded down)


let newDate = new Date();
// newDate.setFullYear(2025);
// newDate.setMonth(11); // December (0-11)
// newDate.setDate(25);

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());





