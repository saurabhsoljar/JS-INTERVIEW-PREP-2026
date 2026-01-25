const promiseOne = new Promise(function(resolve,reject){
    //Do an async Task
    //DB calls, cryptographiy, network
    setTimeout(function(){
        console.log('async task is compplete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consusmed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Aysnc 2 resolved");
    
})

//PROMIS 3

const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Chai",email:"chai@example.com"})
    },1000)
})

promisThree.then(function(user){
    console.log(user);
    
})


// promis 4

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"saurabh",password:"12345"})
        }else{
            reject('ERROR:somtthing went wrong')
        }
    },1000)
})

const username =  promisFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("the promisse is resolve or reject"))

 
//promis 5

const promisFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username:"JavaScript", password:"5678"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promisFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }
// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))
