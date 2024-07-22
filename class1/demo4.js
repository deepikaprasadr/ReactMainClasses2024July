// null vs undefined
let a = 10;
let b = "Hello";
let c = 10.0;//number
let d = true;
let e = { firstName: "Mark" };
let f;
let g = null;

console.log(typeof a); // number
console.log(typeof b); // string
console.log(typeof c); // number
console.log(typeof d); // boolean
console.log(typeof e); // object
console.log(typeof f); // undefined
console.log(typeof g); // object

// == vs ===
let x = 10;
let y = "10";

console.log(x == y); // true
console.log(x === y); // false

// turney operator
let age = 15;
// if (age > 18) {
//   console.log("eligible for voting");
// } else {
//   console.log("not eligible for voting");
// }

/***
 * 
 * (condition) ? true statement : false statement
 * 
 */

let result =  (age > 18) ? 'eligible for voting' : 'not eligible for voting';
console.log(result)
