/*for...of → iterates values of an iterable (arrays, strings, Maps/Sets, generators).

for...in → iterates keys (property names) of an object (including inherited enumerable props). Order is not guaranteed.*/

// for...of with arrays (values)
const nums = [10, 20, 30];
for (const n of nums) {
  console.log(n); // 10, 20, 30
}

// for...in with objects (keys)
const user = { id: 1, name: "Ali" };
for (const key in user) {
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    console.log(key, user[key]); // id 1, name "Ali"
  }
}
