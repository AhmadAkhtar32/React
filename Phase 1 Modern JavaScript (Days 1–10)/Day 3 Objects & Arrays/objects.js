/* 
An object is like a real-world thing that has properties (data) and methods (actions).
Think of a car:
Properties: color, brand, speed.
Methods: start(), stop(), honk().
 */

const mySym = Symbol("Key1")         //declaring a symbol

const bike ={ 
    company: "United",
    Model : 2025,
    [mySym]: "My Key1",              //assigning a value to symbol
    Color : "Black",
    "Engine P" : "150cc",
    owner: "Ahmad A"
}

console.log(bike.owner)
console.log(bike["Engine P"])
console.log(bike[mySym])            //calling the value of symbol

bike.speed = "140km/hr"              // adding a new property

console.log(bike)