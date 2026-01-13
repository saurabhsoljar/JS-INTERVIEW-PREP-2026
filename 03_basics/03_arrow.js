

const user ={
    username: "saurabh",
    price: 999,

    welcomeUser: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
    //console.log(this);
    
    
}
// user.welcomeUser(); // saurabh,welcome to website
// user.username="soljar"
// user.welcomeUser(); // soljar,welcome to website

//console.log(this);


// function chai(){
//     let username="saurabh" //local variable , undefined in this context
//     console.log(this.username);
// }
// chai(); //global object


// const chai = function(){
//     let username="saurabh" //local variable , undefined in this context
//     console.log(this.username);
// }
// chai(); //global object
        


// const chai =  () => {
//     let username="saurabh" //local variable , undefined in this context
//     //console.log(this.username);
//     console.log(this);
// }
// chai(); //global object

// Basic arow function example

//explicit return

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(5,10)); //15

//implecet return
// const addTwo =(num1,num2)=>num1+num2
 
// console.log(addTwo(5,10)); //15

//note:- if rap in {} write to return and if you rap to (pranthess) it will return the value implicitely not need to write return keyword

// const addTwo =(num1,num2)=>(num1+num2)
 
// console.log(addTwo(5,10)); //15

//object method with arrow function

// const addTwo =(num1,num2)=>( {username:"saurabh",price:999} )
// console.log(addTwo(5,10)); //15


const muArray = [1,2,3,4,5];
muArray.forEach((num)=>{
    console.log(num);
})

console.log(this);