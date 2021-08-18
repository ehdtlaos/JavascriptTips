// Can we use default parameter instead?
function printMessage(text = 'Nothing to display 😜') {
  console.log(text);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);

// ⚠️ default parameter is only used for 'undefined' 🚨

// can also be used with expression(functions)

// const result = firstFunction() ?? secondFunction();
// console.log(result);

// function firstFunction() {
//   return null;
// }

// function secondFunction() {
//   return 'Hello from Korea(🇰🇷)';
// }