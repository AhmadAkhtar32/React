//Q1 : Create a variable of type string and try to add a number to it
let a = " I am a Computer Scientist !";
let b = 32;

console.log(a + b)

//Q2 : Find the datatype of Q1

console.log(typeof(a+b))

let x;
console.log(x);
//Is the output null, undefined, 0, or an error?
//Answer = Undefined

let score = 10;
score = 15;
const pi = 3.14;
pi = 3.14159;
// Which line will cause an error, and why?
//Answer :  The 4th line (pi = 3.14159;) will cause an error because const variables cannot be reassigned after their first value is set.

console.log(5 == "5");
console.log(5 === "5");
// Can you tell me the two outputs?
//Answer: 5 == "5" → true because == does type conversion.
//5 === "5" → false because === checks both value and type (number vs string).