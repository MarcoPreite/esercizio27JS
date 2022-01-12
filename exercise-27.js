const person = {
  firstName: 'John',
  lastName: 'Doe'
};

if (person && person.address && person.address.city) {
  console.log(person.address.city);
};

if (person.fullName?.()) {
  console.log(person.fullName());
}