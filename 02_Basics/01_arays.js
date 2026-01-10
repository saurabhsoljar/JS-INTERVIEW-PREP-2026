const myArray = [10, 20, 30, 40, 50];
const name =["saurabh","kumar","singh"];
// console.log(myArray);
// console.log(name);
// console.log(myArray[1]);


// Array Methods
// myArray.push(60); // adds 60 at the end
// myArray.push(70); // adds 70 at the end
// myArray.pop(); // removes last element (70)
// myArray.shift(); // removes first element (10)
// myArray.unshift(5); // adds 5 at the beginning first number
// console.log(myArray);
// console.log(myArray.includes(5));
// console.log(myArray.indexOf(50));


// const newArray = myArray.join(","); // joins elements into a string with " - " separator
// console.log(newArray);
// console.log(typeof newArray); // string
// console.log(myArray); // original array remains unchanged


//slice and splice
const slicedArray = myArray.slice(1, 4); // extracts elements from index 1 to 3
//console.log(myArray);

//console.log(slicedArray);

const splicedArray = myArray.splice(1,4);    // removes 2 elements from index 1 and adds 25 and 35
//console.log(myArray);
//console.log(splicedArray);

