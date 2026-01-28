class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Userme: ${this.username}`)
    }
    createId(){
        return`123`
    }
}

const saurabh = new User("saurabh")
console.log(saurabh.createId())

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();