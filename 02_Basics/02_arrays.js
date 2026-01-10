const herroes = ['Superman', 'Batman', 'Wonder Woman'];
const villains = ['Lex Luthor', 'Joker', 'Cheetah'];

//herroes.push(villains); // adds villains array at the end of herroes
//console.log(herroes);

// const allHeroes = herroes.concat(villains); // merges villains into herroes without modifying herroes
// console.log(allHeroes);

// const allCharacters = [...herroes, ...villains]; // merges both arrays using spread operator
// console.log(allCharacters);

// Accessing elements
// console.log(herroes[0]); // Superman
// console.log(villains[1]); // Joker


// const another_array =[1,2,3,[4,5],6,7,[8,9,[10,11,[12,13]]]];
// //console.log(another_array.flat(2)); // flattens the array up to 2 levels deep
// console.log(another_array.flat(Infinity)); // flattens the array completely

// console.log(Array.isArray("SAURABH"));
// console.log(Array.from("saurabh"));

//console.log(Array.from({name:"saurabh"})); // converts array-like object to array

let score1=100
let score2=200
let score3=300
// const scores = [score1, score2, score3];
// console.log(scores);

console.log(Array.of(score1,score2,score3));


