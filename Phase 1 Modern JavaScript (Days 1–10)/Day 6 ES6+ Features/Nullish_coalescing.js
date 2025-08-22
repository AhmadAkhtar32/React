//Return the right-hand side only if the left-hand side is null or undefined.

const input = 0;
console.log(input || 10); // 10  (|| treats 0 as falsy)
console.log(input ?? 10); // 0   (?? keeps 0)
