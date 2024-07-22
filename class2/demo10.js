class Person{
    firstName;
    lastName;

    getFullName(){
        console.log(`${ this.firstName } ${ this.lastName }`)
    }
}

const person1 = new Person()
person1.firstName = 'Mark'
person1.lastName = 'Smith'
//console.log(`${ person1.firstName } ${ person1.lastName }`)
person1.getFullName()

const person2 = new Person()
person2.firstName = 'Paul'
person2.lastName = 'Watson'
//console.log(`${ person2.firstName } ${ person2.lastName }`)
person2.getFullName()