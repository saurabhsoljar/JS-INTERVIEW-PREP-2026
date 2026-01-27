// let myName = "saurabh   "

// console.log(myName.trim().length);
// console.log(myName.truelength);   //property,method different


let myHeros = ["thor","spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all object`);
    
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
    
}

// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
//heroPower.heyHitesh()


// inheritance

const User ={
    name:"chai",
    email:"chai@gmail.com"
}

const Teacher = {
    makeVideo:true
}

const TeachingSuppot = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js Assignment',
    fullTime: true,
    __proto__: TeachingSuppot
}

Teacher.__proto__ = User

//modern syntex

Object.setPrototypeOf(TeachingSuppot,Teacher)

let anotherUserName = "chaiAurCode"

String.prototype.trueLength = function(){
    // console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()