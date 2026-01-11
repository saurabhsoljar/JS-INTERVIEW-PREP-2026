// singleton object
// object literals syntax

//const tinderUser = new Object(); // this is singleton object syntax
const tinderUser = {}; // this is not singleton object syntax (object literal syntax)
//console.log(tinderUser);

tinderUser.id="1234abcd";
tinderUser.name = "Saurabh";
tinderUser.age = 22;
tinderUser.isLoggedIn = false;

//console.log(tinderUser);


const regularUser = {
    id: "5678efgh",
    full_name:{
        first_name: "Saurabh",
        last_name: "Kumar"
    },
    email: "soljar@gmil.com",
    age: 25,
    isLoggedIn: true
};

// console.log(regularUser);
// console.log(regularUser.full_name);
// console.log(regularUser.full_name.first_name);
// console.log(regularUser.last_name);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};
const obj3 = {...obj1, ...obj2,...obj4}; // merging two objects
//const obj3 = Object.assign({}, obj1, obj2,obj4); // merging two objects using Object.assign method
//console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//===============Objects de-structure=================

const course ={
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Saurabh Kumar"
}

//course.courseInstructor; // "Saurabh Kumar"
const {courseInstructor: instructor} = course; //object de-structuring

//console.log(courseInstructor);
console.log(instructor); // "Saurabh Kumar"
