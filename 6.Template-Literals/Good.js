// Template Literals (Template String)
const person = {
  name: 'Julia',
  score: 4,
};

// 🌟 Good Code 👏
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// Using object destructuring
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// Instead of making it global, make it reusable function!
function greetings(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}