
//global & local scope,Block scope
// let a=10
// var b=20
// const c=30

// console.log(a);
// console.log(b);
// console.log(c);

// var b=50
// if(true){
//     let a=100
//     var b=200
//     const c=300 
//     console.log(b);
    
// }

// console.log(b); //200

//nested scope

// function one(){
//     const username="saurabh"
//     function two(){
//         const website="youtube"
//         function three(){
//             const password="1234"
//             console.log(username,website,password);
//         }
//         three()
//     }
//     two()
// }
// one() //saurabh youtube 1234


// if (true){
//     const username="saurabh"
//     if (username==="saurabh"){
//         const website="youtube"
//         if(website==="youtube"){
//             const password="1234"
//             console.log(username,website,password);
//         }
//         console.log(username,website);
//     }
//     console.log(username);  
// }
// //console.log(username); //username is not defined


//=========================  intersting example (Hosting) =========================//
addone(5) //6
function addone(num){
    return num+1
}
// addone(5) //6

addtwo(5) //7
const addtwo = function (num){
    return num+2
}       
// addtwo(5) //7