// const accountId = 123456789
// let accountEmail = "saurabh@gmail.com"
// var accountPassword = "saurabh@123"
// accountCity = "Bihar"

//accountId = 987654321 // not allowed
//console.log(accountId)

//accountEmail = "soljar@gmail.com"
//console.log(accountEmail)

//accountPassword = "soljar@123"
//console.log(accountPassword)

//accountCity = "Patna"
//console.log(accountCity)

//console.log([accountId,accountEmail,accountPassword,accountCity]);  

/*
Prefer not  to used var  for variable declaration
Because var is function scoped and it create problem in block scope
issue in block scope and function scope

We avoid var because it has function scope, allows re-declaration, and causes unexpected bugs due to hoisting.

“In modern JavaScript, we avoid var and prefer const and let because they provide block scope, prevent accidental redeclaration, and reduce bugs.”
*/

// const accountId = 123456789        // ✅ Cannot be reassigned
// let accountEmail = "saurabh@gmail.com"   // ✅ Can be reassigned, block scoped
// var accountPassword = "saurabh@123"      // ⚠️ Avoid! Function scoped
//accountCity = "Bihar"                    // ❌ Bad! Creates global variable


// var - function scopeed

function testVar(){
    if(false){
        var x = 10;
    }
    console.log(x);
    
}

testVar()