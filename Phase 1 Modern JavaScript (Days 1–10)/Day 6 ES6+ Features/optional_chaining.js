//Safely access deep properties/calls without crashing if something is null or undefined.
const data = { profile: { name: "Sara" } };

console.log(data.profile?.name);        // "Sara"
console.log(data.settings?.theme);      // undefined (no error!)
console.log(data.arr?.[0]);             // element access
data.sayHi?.();                         // optional function call
