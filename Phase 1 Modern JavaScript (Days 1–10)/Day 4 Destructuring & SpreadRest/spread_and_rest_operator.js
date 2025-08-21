// The spread (...) and rest (...) operators in JavaScript use the same syntax but serve different purposes depending on the context.

/* Spread Operator
The spread operator expands or "spreads out" elements from arrays, objects, or other iterables. */

// Combine Two Arrays
arr1 = [1,2,3]
arr2 = [4,5,6]

const combined = [...arr1, ...arr2]
console.log(combined)     

// Copy An Array
const copy = [...arr1]
console.log(copy)

// Pass Array element as function argument

Math.max(...arr1)