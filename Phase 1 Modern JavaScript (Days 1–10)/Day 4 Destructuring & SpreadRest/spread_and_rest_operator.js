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


/*Rest Operator
The rest operator collects multiple elements into an array or object. */

// Collect remaining arguments
function sum(first, ...numbers) {
  console.log(first); // 1
  console.log(numbers); // [2, 3, 4, 5]
  return numbers.reduce((acc, num) => acc + num, first);
}

sum(1, 2, 3, 4, 5);