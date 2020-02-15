// default, rest, spread
// default arguments
function divide(a, b = 1) {
  console.log(a, b, a / b);
}
divide(5, 2);
divide(4);

// rest : ... (spread operator)
function sumOfNos(a, b, ...c) {
  console.log(a, b, c);
}
sumOfNos(1, 2);
sumOfNos(1, 2, 3);
sumOfNos(1, 2, 3, 4, 5, 6);

// spread : immutable : arrays & objects
const product = { id: 100, name: "product", price: 12999 };
const cart = [{ ...product }];
