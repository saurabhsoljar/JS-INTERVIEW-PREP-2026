//objectlitteral

const user = {
    username: "saurabh",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }
}
// console.log(user.getUserDetails());

// console.log(user.username);


// const promisesOne = new Promise()
// const data = new Date()

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome $(this.username)`);
        
    }
    return this
}

const userOne = new User("saurabh",12,true)
const userTwo = new User("solajr",11,true)
console.log(userOne)


