const numbers = [12, 24, 56, 76, 80];

// let result = [];

// for(number of numbers){
//     let a = number * 10;
//     result.push(a)
// }

// console.log(result)

const result =  numbers.map((number) => number * 10 )
console.log(result)

const names = ['mark', 'paul', 'watson', 'rangel']
const length = names.map((name) => name.length)
console.log(length)