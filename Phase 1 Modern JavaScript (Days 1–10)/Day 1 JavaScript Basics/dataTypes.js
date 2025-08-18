// Javascript have two main Types: Primitives and Objects

//Primitive mean built-in data types in Javascript (Null, Number, String , Symbol, boolean, bigint, undefined)

let a = null;
let b = 32;
let c = "Ahmad";
let d = Symbol("It's a Symbol");
let e = true;      //can also be false
let f = BigInt(32);
let g = undefined;
console.log(a,b,c,d,e,f,g)

// We can find the datatype of a variable
console.log(typeof d)

// Objecst are Key-Value pairs (Non-primitive data-type)

const item={
  "Car" : "Toyota",
  "House": "Furnished",
  "Rent" : "Luxury"
}
console.log(item["Car"])