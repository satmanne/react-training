// object literal
function user(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: firstName + " " + lastName
  };
}

//user('john','doe')
// destructuring
// const u = user("john", "doe");
// const name = u.fullName;
const { fullName: name, firstName } = user("john", "doe");
console.log(fullName, name);

const user1 = (firstName, lastName) => ({
  firstName,
  lastName,
  fullName: firstName + " " + lastName
});
