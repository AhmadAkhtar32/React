/*
Scope = where a variable can be accessed in your code.
JavaScript has these main types of scope:
Global Scope → accessible everywhere.
Function Scope → created inside a function, only usable there.
Block Scope → created inside { } with let or const, only usable inside that block. */

//Global Scope : Any variable declared outside all functions or blocks

let a = "Ahmad";

function str (greet){
    return greet + a ;
}
console.log(str("Hello ! "))


//Function Scope: Variables declared with var, let, or const inside a function exist only inside it.

function hehe(name){
    let g= "Greetings !"
    return name + g;

}
console.log(hehe("Ahsan"))

/*Block Scope: A block is anything inside { } (loops, if statements, functions, etc.).
let and const → block-scoped.
var → function-scoped, so it ignores block boundaries.*/

if (true){
    var x=10;
    let y=20;
    const z=30;
    console.log(y)
    console.log(z)
}
console.log(x) //only x will be called 
