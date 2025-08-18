// Operators and Expressions 

// Expression can be a value that we can assign to a variable

// For computation in a program we use Operators

//Arithmetic Operators used for basic mathematical operations
a = 45
b = 4
console.log("A + B = ", a + b)
console.log("A - B = ", a - b)
console.log("A * B = ", a * b)
console.log("A / B = ", a / b)
console.log("A % B = ", a % b)
console.log("A ** B = ", a ** b)   // Will take 4 as a power of 45
console.log("++a: ", ++a)       //First increment then print
console.log("a++", a++)         //increment After printing the value
console.log(a)                  //Final value


//Assignment Operators

c = 10 
c += 10   // add 1 to the value
c *= 10  

//Comparison operators 

let x = 23
let z = 32

console.log (x == z)
console.log (x != z)
console.log (x === z)      // Also compares Data-type ! 


// Logical operators
let v = 5
let u = 6
console.log ( v<u && v==5)   //AND Operator
console.log ( v<u || u<5)    // OR Operator
console.log (!( v<u ))      //Not (Flips the value)