// test1.js

console.log("app started");

for (var i = 0; i < 10; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, j * 100);
  })(i);
}

// ES6
// let & const : block scope variable
for (let i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}
// const : read only
const a = "test";
// a = "demo";
const b = { name: "test" };

console.log("app finished");
