const employee = {
    empId: 1,
    firstName: 'Paul',
    lastName: 'Watson',
    email: 'p@gmail.com'
}

// let id = employee.empId;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

// destructuring
let { empId, firstName, lastName, email } = employee;


//let fullName = employee.firstName + ' '+ employee.lastName;
let fullName = firstName + ' '+ lastName;
console.log(fullName)

const scores = [50, 60, 70, 80];
// let a = scores[0];
// let b = scores[1];
// let c = scores[2];
// let d = scores[3];

let [a,b,c,d] = scores;

console.log(a,b,c,d)