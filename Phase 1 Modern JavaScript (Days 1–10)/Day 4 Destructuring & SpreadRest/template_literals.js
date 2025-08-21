//Template literals (also called template strings) are a powerful string feature in JavaScript that use backticks (`) instead of regular quotes. They provide a more flexible way to create and format strings.

// Regular strings
const regular = "Hello world";
const alsoRegular = 'Hello world';

// Template literal
const template = `Hello world`;


// The most common use is embedding expressions using ${}
const name = "Ahmad";
const age = 22;

// Old way (concatenation)
const message1 = "Hello, my name is " + name + " and I'm " + age + " years old.";

// Template literal way
const message2 = `Hello, my name is ${name} and I'm ${age} years old.`;

// Can include any expression
const message3 = `Next year I'll be ${age + 1} years old.`;
const message4 = `My name in caps is ${name.toUpperCase()}.`;