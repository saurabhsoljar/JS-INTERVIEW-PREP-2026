const name = "sauranh"
const repoCount= 50

// String Concatenation
//console.log("Hello " + name + ", you have " + repoCount + " repositories.")

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
/*
const fullName = "Saurabh kumar"
console.log(fullName.length); //13
console.log(fullName.toUpperCase());// "SAURABH KUMAR"
console.log(fullName.toLowerCase());// "saurabh kumar"
console.log(fullName.charAt(0));// "S"
console.log(fullName.indexOf("kumar"));// 8
console.log(fullName.endsWith("kumar"));// true
console.log(fullName.includes("saur"));// true
console.log(fullName.split(" "));// ["Saurabh", "kumar"]
console.log(fullName.indexOf('a'));//1

const newString = fullName.substring(0,3);
console.log(newString);// "Sau"

*/
const fullName = "Saurabh kumar"
const anotherString = fullName.slice(-1,3);
//console.log(anotherString);// "" (empty string because the start index is greater than the end index)

//trim
const newStringOne = " saurabh kumar  "
console.log(newStringOne);

console.log(newStringOne.trim());// "saurabh kumar"

//replace
const url= "https://www.youtube.com/watch?v=tTDjCfkQNpY"
const newUrl = url.replace("www","xxx");
console.log(newUrl);
