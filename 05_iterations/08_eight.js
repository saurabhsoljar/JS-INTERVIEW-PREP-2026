//reduce

const myNums = [1,2,3]

// const myTotal= myNums.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce( (acc , curr) => acc + curr,0)


// console.log(myTotal);


const shoppingCart = [
        {
            itemName: "JavaScript Course",
            price: 2999
        },
        {
            itemName: "HTML & CSS Course",
            price: 1999
        },
        {
            itemName: "React JS Course",
            price: 3999
        },
        {
            itemName: "Node.js Course",
            price: 3499
        },
        {
            itemName: "Full Stack Web Development",
            price: 9999
        },
        {
            itemName: "Python Programming",
            price: 2799
        },
        {
            itemName: "Java Programming",
            price: 3199
        },
        {
            itemName: "Data Structures & Algorithms",
            price: 4999
        },
        {
            itemName: "SQL & PostgreSQL",
            price: 2499
        },
        {
            itemName: "Git & GitHub",
            price: 1499
        }
];

const priseToPay =  shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priseToPay);
