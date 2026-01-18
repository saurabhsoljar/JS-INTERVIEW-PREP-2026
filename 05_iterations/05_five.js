// for each loop

const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach((val) => {
//     console.log(val);
    
// })


// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)


// coding.forEach((item,index,ar)=>{
//     console.log(item,index,ar);
    
// })


const myCoading =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "ja"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach( (item)=> {

    console.log(item.languageFileName);
    
})