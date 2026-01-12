function addTwoNumbers(a, b) {
    return a + b;
}
const sum = addTwoNumbers(5, 7);
//console.log("Sum:", sum); // Sum: 12


function loginUserMessage(username = "Guest") {
    return `Hello ${username}, welcome back!`;
}

const message = loginUserMessage();
//console.log(message); // Hello Guest, welcome back!

function calculateCartPrice(vall1,vall2,...num1) {
    return num1
}
// console.log(calculateCartPrice(200,300,400,500));

const user ={
    username: "saurabh",
    price: 999,
    
}

function handleObject(anyuser) {
    console.log((`Username is ${anyuser.username} and price is ${anyuser.price}`));
    
}

handleObject(user); // Username is saurabh and price is 999



const myNewArray = [1,2,3,4,5];



