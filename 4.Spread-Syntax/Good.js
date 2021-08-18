const item = { type: '👔', size: 'M' };
const detail = { price: 20, made: 'Italy', gender: 'M' };

// 🌟 Good Code 👏 (old way)
const shirt0 = Object.assign(item, detail);

// 🌟 Good Code 👏 (using spread-syntax)
const shirt = { ...item, ...detail };

// why use spread-syntax?
// if you want to update only price in the object
// spread syntax allows you to do it with one more simple parameter
const shirt2 = { ...item, ...detail, price: 40 };

// Spread Syntax - Array
let fruits = ['🥝', '🍓', '🥭', '🍈'];

// creating new array with spread syntax and replacing old fruits
// fruits.push('🍓')
fruits = [ ...fruits, '🍓' ];

// // fruits.unshift('🍑')
fruits = [ '🍑', ...fruits ];

// if you want to combine two fruits arrays together
const fruits2 = ['🍍', '🍇', '🍌'];

// let combined = fruits.concat(fruits2);
let combined = [ ...fruits, '🍉' ,...fruits2 ];