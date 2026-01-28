class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was addes by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","123456")
//chai.addCourse()
chai.logMe()
const masalachai = new User("masalaaChai")
//masalachai.addCourse()

masalachai.logMe()