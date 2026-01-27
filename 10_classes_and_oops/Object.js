function multippleBy5(num){
    return num*5
}

multippleBy5.power = 2

console.log(multippleBy5(5));
console.log(multippleBy5.power);
console.log(multippleBy5.prototype)


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`prise is ${this.score}`);
    
}

const chai = new createUser("chai",25)
const tea =new createUser("tea",250)


chai.printMe()

//prototypes provide - this,new