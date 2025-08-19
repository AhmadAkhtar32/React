//  There are two ways of function Creation
// 1): Function declaration   2): Function Expression

// 1):  Can be called before defination

function add(a, b) {
    return a + b;
}
console.log(add(2, 3));


// 2):   Cannot be called before defination

const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 2)); 
