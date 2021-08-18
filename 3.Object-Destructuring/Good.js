// Object Destructuring
const person = {
  name: 'Julia',
  age: 20,
  phone: '1234567890',
};

// 🌟 Good Code 👏
function displayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// name = person.name
// age = person.age