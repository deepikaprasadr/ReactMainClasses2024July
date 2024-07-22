let a = 100;
console.log(a);
a = 200;
console.log(a);//200

// const b = 100;
// console.log(b);
// b = 200;
// console.log(b)

const employee = {
    firstName: 'Mark',
    lastName: 'Smith'
}

console.log(employee.firstName)
employee.firstName = 'John'
console.log(employee.firstName)

employee = new Object()//TypeError: Assignment to constant variable.