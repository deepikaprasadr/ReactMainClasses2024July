const employee = {
    id: 1,
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmail.com',
    status: false
}

const newEmployee = {
   ...employee,
   status: true,
   department: 'admin'
}  //status is overwritten //department will be a new object

console.log(employee)
console.log(newEmployee)