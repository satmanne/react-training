// arrays
// for of/in loop
const cars = ["Audi", "Merc", "BMW", "Tesla"];
// arrays : values
for (let c of cars) {
  console.log(c);
}
// for in loop : keys : object
for (let c in cars) {
  console.log(c);
}
const a = {
  name: "test",
  age: 12
};
// dot notation : a.name
// bracket notation : a['name']
for (let k in a) {
  console.log(k, a[k]);
}
// array functions
// map
const nos = [1, 2, 3, 4, 5];
const square = nos.map(function(val) {
  if (val % 2 === 0) {
    return val * val;
  }
});
console.log(nos, square);
// filter : return boolean
const filtered = cars.filter(val => val.toLowerCase().includes("a"));

console.log(cars, filtered);
