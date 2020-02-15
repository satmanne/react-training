// arrow functions : => (arrow operator)
// () => expression
// context binding
const u = {
  name: "test",
  age: 12,
  greeting: function() {
    console.log("OUTSIDE", this);
    setTimeout(() => {
      console.log("INSIDE", this);
      console.log("hello from", this.name);
    }, 1000);
  }
};
