const items = [ 1, 2, 3, 4, 5, 6];

// 🌟 Good Code 👏
function getAllEvens(items) {
  return items.filter((num) => num % 2 === 0);
}

// 🌟 Good Code 👏
function multiplyByFour(items) {
  return items.map(num => num * 4);
}

// 🌟 Good Code 👏
function sumArray(items) {
  items.reduce((a, b) => a + b, 0);
}

// 🌟 Good Code 👏
const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// 🌟 Better Code 👏
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// 🌟 Better Better Code 👏
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);