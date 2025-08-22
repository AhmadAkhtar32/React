// Default parameters let you set a fallback value when a caller passes undefined or omits the argument.

function greet(name = "friend") {
    return `Hello, ${name}!`;
}

greet();            // "Hello, friend!"
greet(undefined);   // "Hello, friend!"
greet(null);        // "Hello, null!"  (null DOES NOT trigger default)
greet("Ahmad");     // "Hello, Ahmad!"