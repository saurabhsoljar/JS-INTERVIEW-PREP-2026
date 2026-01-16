//control flow statements in js

//if else   

    //true condition
// if(true){
//     console.log("This is true");
// }

    //false condition
// if(false){
//     console.log("This is false");
// }

const isUserloggedin = true

if(2!=3){
    //console.log("User is logged in");
}

const temperature=70

// if(temperature < 60){
//     console.log("temperature is less then 60");
    
// }else{
//     console.log("temperature is grater the 60");
// }

//logical operators with if else


// const score = 200

// if(score>100){
//     var power ="fly"
//     console.log(`user power:${power}`);
    
// }
// console.log(`user power:${power}`);


//sorthand notation of if else (ternary operator)

const balance=1000
//if (balance>500)console.log("testing shorthand if");

// if (balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<10000){
//     console.log("less than 1001");
// }


const userLoggedIn=true
const debitCard=true
const loggedInFroomEmail = true
//logical AND operator (&&) ,logical OR operator (||) , logical NOT operator (!)

if(userLoggedIn && debitCard){
    console.log("purchase successful");
}if(userLoggedIn || loggedInFroomEmail){
    console.log("user logged in");
}
