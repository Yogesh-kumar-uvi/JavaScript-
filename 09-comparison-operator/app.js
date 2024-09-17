// JavaScript file demonstrating comparison operators with examples

// Example 1: Equality (==) and Strict Equality (===)
let num1 = 5;
let num2 = "5";

// Equality checks only value, not type
console.log('5 == "5":', num1 == num2); // true because it does type coercion

// Strict Equality checks both value and type
console.log('5 === "5":', num1 === num2); // false because the types are different (number vs string)


// Example 2: Inequality (!=) and Strict Inequality (!==)
let num3 = 10;
let str1 = "10";

// Inequality checks only value, not type
console.log('10 != "10":', num3 != str1); // false because type coercion makes them equal

// Strict Inequality checks both value and type
console.log('10 !== "10":', num3 !== str1); // true because the types are different


// Example 3: Greater than (>) and Less than (<)
let a = 15;
let b = 20;

// Greater than
console.log('15 > 20:', a > b); // false

// Less than
console.log('15 < 20:', a < b); // true


// Example 4: Greater than or equal to (>=) and Less than or equal to (<=)
let c = 30;
let d = 30;

// Greater than or equal to
console.log('30 >= 30:', c >= d); // true because they are equal

// Less than or equal to
console.log('30 <= 30:', c <= d); // true because they are equal


// Example 5: Comparing different data types
let bool1 = true;
let bool2 = 1;

// Equality (==) performs type coercion, so true is equal to 1
console.log('true == 1:', bool1 == bool2); // true

// Strict Equality (===) does not perform type coercion, so true is not equal to 1
console.log('true === 1:', bool1 === bool2); // false
