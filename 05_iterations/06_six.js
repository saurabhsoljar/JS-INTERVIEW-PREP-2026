// const coding = ["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);



// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=> num > 4 )

// console.log(newNums);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=> {
//     return num > 4
// } )
// console.log(newNums);


// const newNums = []
// myNums.forEach ((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1995, edition: 2005 },
    { title: 'Book Ten', genre: 'Biography', publish: 2001, edition: 2012 },
    { title: 'Book Eleven', genre: 'Technology', publish: 2014, edition: 2019 },
    { title: 'Book Twelve', genre: 'Self-Help', publish: 2010, edition: 2018 },
    { title: 'Book Thirteen', genre: 'Science', publish: 2003, edition: 2011 },
    { title: 'Book Fourteen', genre: 'Fiction', publish: 1984, edition: 1999 },
    { title: 'Book Fifteen', genre: 'History', publish: 1990, edition: 2000 },
    { title: 'Book Sixteen', genre: 'Technology', publish: 2016, edition: 2022 },
    { title: 'Book Seventeen', genre: 'Non-Fiction', publish: 2007, edition: 2015 },
    { title: 'Book Eighteen', genre: 'Biography', publish: 1998, edition: 2006 },
    { title: 'Book Nineteen', genre: 'Self-Help', publish: 2012, edition: 2020 },
    { title: 'Book Twenty', genre: 'Science', publish: 2018, edition: 2023 }
];

//const userBooks =books.filter((bk) =>bk.genre ==='History')
const userBooks=books.filter((bk)=> {return bk.publish>=2000 && bk.genre==='Science'})
console.log(userBooks);



