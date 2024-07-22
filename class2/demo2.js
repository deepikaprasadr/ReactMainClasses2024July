const employee = {
  id: 1,
  firstName: "Mark",
  lastName: "Watson",
  email: "m@gmaill.com",
  address: {
    city: "delhi",
    country: "India",
  },
};

const { id, firstName, lastName, email } = employee;
const { city, country } = employee.address;
console.log(firstName + ", " + country);
