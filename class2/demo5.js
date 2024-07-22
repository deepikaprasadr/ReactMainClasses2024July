// old syntax
function hello(name){
    return 'Hello '+ name;
}
console.log(hello('Mark'))

// new syntax - arrow function
let welcome = (name) => 'Welcome '+ name;
console.log(welcome('john'))

/***
 * () => {}
 * 
 * () - list of parameters or empty
 * => - fat arrow or arrow opeartor
 * {} - expression
 */

//let addNumber = (a, b) => a + b;

let addNumber = (a, b) => {
    return a + b;
}

console.log(addNumber(100, 200))

let foo = () => ''
let foo2 = (a,b) => ''
let foo3 = a => ''
let foo4 = (a) = ''
let foo5 = (...args) => ''
let foo6 = (emp) => ''