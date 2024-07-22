let x;
let a = 10;
let b = 20;
let c = 30;
let d = "40";
let e = 100;
let f = 200;

const display = (a, b, c, d, e, f) => {
  console.log(a + b + c + d + e + f);
};

display()

console.log(a + b + c + d + e + f)


// undefined 
// 60Hello100200
// 60Hello300

const sum = (a, b) => {
    return a + b;
}

console.log(sum(10, 'Hello'))