// 1. Basic Mathematical Operators
let a = 8;
let b = 3;

// Addition Operator
let addition = a + b; // 8 + 3 = 11
console.log('Addition:', addition);

// Subtraction Operator
let subtraction = a - b; // 8 - 3 = 5
console.log('Subtraction:', subtraction);

// Multiplication Operator
let multiplication = a * b; // 8 * 3 = 24
console.log('Multiplication:', multiplication);

// Division Operator
let division = a / b; // 8 / 3 = 2.666...
console.log('Division:', division);

// Remainder Operator (Modulus)
let remainder = a % b; // 8 % 3 = 2
console.log('Remainder:', remainder);

// Exponentiation Operator
let exponentiation = a ** b; // 8^3 = 512
console.log('Exponentiation:', exponentiation);

// Special Cases: Division by 0
let infinityResult = a / 0; // 8 / 0 = Infinity
console.log('8 / 0 =', infinityResult);

let negativeInfinityResult = -a / 0; // -8 / 0 = -Infinity
console.log('-8 / 0 =', negativeInfinityResult);


// 2. Math Object in JavaScript

// Math Object Properties
console.log('Math.PI:', Math.PI); // Math.PI = 3.14159...
console.log('Math.SQRT2:', Math.SQRT2); // Math.SQRT2 = Square root of 2 (approx. 1.414)
console.log('Math.E:', Math.E); // Math.E = Euler's number (approx. 2.718)


// Math Object Methods

// Square Root of a number
let sqrtValue = Math.sqrt(16); // sqrt(16) = 4
console.log('Math.sqrt(16):', sqrtValue);

// Power of a number
let powerValue = Math.pow(2, 3); // 2^3 = 8
console.log('Math.pow(2, 3):', powerValue);

// Floor (round down)
let floorValue = Math.floor(4.7); // floor(4.7) = 4
console.log('Math.floor(4.7):', floorValue);

// Ceil (round up)
let ceilValue = Math.ceil(4.3); // ceil(4.3) = 5
console.log('Math.ceil(4.3):', ceilValue);

// Round (round to nearest integer)
let roundValue = Math.round(4.5); // round(4.5) = 5
console.log('Math.round(4.5):', roundValue);

// Random (returns a random number between 0 and 1)
let randomValue = Math.random(); // random() = 0 <= result < 1
console.log('Math.random():', randomValue);

// find the area of rectangle

const width = +prompt('please enter the rectangle width');
const height = +prompt('please enter the rectangle height');
// const area = console.log(width*height); 
document.write(`Area of the rectangle:${width * height}`);
