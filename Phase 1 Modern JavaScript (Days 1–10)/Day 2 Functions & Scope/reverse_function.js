// Question: Practice: write a function that reverses a string.

function reversestr(str){
    return str.split("").reverse().join("");

}
console.log(reversestr("hello"));