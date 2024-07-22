// class Employee{
//     firstName;
//     lastName;

//     constructor(){
//         console.log('constructor called')
//     }    

//     display(){
//         console.log('display called')
//     }
// }

// const employee = new Employee()
// employee.display()



// class Employee{
//     firstName;
//     lastName;

//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }    

//     getFullName(){
//         console.log(`${ this.firstName } ${ this.lastName }`)
//     }
// }

// const employee = new Employee('Mark', 'Watson')
// employee.getFullName()


class Employee{
   constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }    
    
    getFullName(){
        console.log(`${ this.firstName } ${ this.lastName }`)
    }
}

const employee = new Employee('Mark', 'Watson')
employee.getFullName()


