// JavaScript file demonstrating truthy and falsy values with examples

// Example 1: Falsy values
let falsyValue = "";

// Empty string is falsy
if (falsyValue) {
    console.log("This is truthy");
} else {
    console.log('"" is falsy'); // Output: '"" is falsy'
}

// Example 2: Truthy values
let truthyValue = "JavaScript";

// Non-empty string is truthy
if (truthyValue) {
    console.log('"JavaScript" is truthy'); // Output: '"JavaScript" is truthy'
}

// Example 3: Falsy values
let falsyNumber = 0;

// 0 is falsy
if (falsyNumber) {
    console.log("This is truthy");
} else {
    console.log('0 is falsy'); // Output: '0 is falsy'
}

// Example 4: Truthy numbers
let truthyNumber = 42;

// Non-zero numbers are truthy
if (truthyNumber) {
    console.log('42 is truthy'); // Output: '42 is truthy'
}

// Example 5: Special Falsy values
let falsyNull = null;

// null is falsy
if (falsyNull) {
    console.log("This is truthy");
} else {
    console.log('null is falsy'); // Output: 'null is falsy'
}

// Example 6: Special Truthy values
let truthyArray = [];

// Even an empty array is truthy
if (truthyArray) {
    console.log('[] (empty array) is truthy'); // Output: '[] (empty array) is truthy'
}

let truthyObject = {};

// Even an empty object is truthy
if (truthyObject) {
    console.log('{} (empty object) is truthy'); // Output: '{} (empty object) is truthy'
}
