//problem no-1
//using var
if (true) {
    var x = 10
}
//console.log(x)   // 😱 10 (accessible outside block)


//using let
if (true) {
    let a = 10
}
//console.log(a)   // ❌ Error (GOOD behavior)

//problem no-2
// var a = 5
// var a = 20   // 😱 No error
//console.log(a) // 20


// let a = 5
// let a = 20   // ❌ Error (GOOD)
//console.log(a)

//Problem 3: var is hoisted in a confusing way
//with var
//console.log(b)  // 😱 undefined (not error )
var b = 10

//with let
//console.log(c)  // ❌ Error (GOOD)
//let c = 10


//Real-life bug example (Interview favorite)
//USING VAR
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}


//USING LET
for (let j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j)
    }, 1000)
}

