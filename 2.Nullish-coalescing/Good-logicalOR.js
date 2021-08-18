// ⚠️ Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display 😜';
  console.log(message);
}

printMessage('Hello');
printMessage(undefined);
printMessage(null);
printMessage(0);
printMessage('');

// Nullish coalescing operator ??
// leftExpr ?? rightExpr
// left Expr = null and undefined

// Logical OR operator ||
// leftExpr || rightExpr
// leftExpr = falsy
// falsy = undefined, null, false, 0, -0, NaN, "", '' and ``