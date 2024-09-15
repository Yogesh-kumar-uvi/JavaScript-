// Example of String length property
const strLength = "Hello, World!";
console.log("Length of string:", strLength.length);  // Output: 13

// Methods Without Argument

// Example of toUpperCase() method
const strUpperCase = "hello";
console.log("Uppercase:", strUpperCase.toUpperCase());  // Output: "HELLO"

// Example of toLowerCase() method
const strLowerCase = "HELLO";
console.log("Lowercase:", strLowerCase.toLowerCase());  // Output: "hello"

// Example of trim() method
const strTrim = "  Hello, World!  ";
console.log("Trimmed string:", strTrim.trim());  // Output: "Hello, World!"

// Example of trimStart() method
const strTrimStart = "  Hello!";
console.log("Trim start:", strTrimStart.trimStart());  // Output: "Hello!"

// Example of trimEnd() method
const strTrimEnd = "Hello!   ";
console.log("Trim end:", strTrimEnd.trimEnd());  // Output: "Hello!"

// Methods With Argument

// Example of includes() method
const strIncludes = "JavaScript is fun!";
console.log("Includes 'fun':", strIncludes.includes("fun"));  // Output: true
console.log("Includes 'hard':", strIncludes.includes("hard"));  // Output: false

// Example of indexOf() method
const strIndexOf = "Hello, World!";
console.log("Index of 'World':", strIndexOf.indexOf("World"));  // Output: 7
console.log("Index of 'Earth':", strIndexOf.indexOf("Earth"));  // Output: -1

// Example of replace() method
const strReplace = "Hello, World!";
console.log("Replace 'World' with 'JavaScript':", strReplace.replace("World", "JavaScript"));  
// Output: "Hello, JavaScript!"

// Example of replaceAll() method
const strReplaceAll = "Apples are red. Apples are sweet.";
console.log("Replace all 'Apples' with 'Oranges':", strReplaceAll.replaceAll("Apples", "Oranges"));
// Output: "Oranges are red. Oranges are sweet."

// Example of concat() method
const strConcat1 = "Hello";
const strConcat2 = "World";
console.log("Concatenated string:", strConcat1.concat(", ", strConcat2, "!"));
// Output: "Hello, World!"

const str = 'hello';
const str1= 'world';
console.log(str.concat(" ",str1));//Output: hello world


// Example of padStart() method
const strPadStart = "5237";
console.log("Pad start:", strPadStart.padStart(16, "*"));  // Output: "005"

// Example of padEnd() method
const strPadEnd = "61442";
console.log("Pad end:", strPadEnd.padEnd(16, "*"));  // Output: "500"

// Example of charAt() method
const strCharAt = "Hello, World!";
console.log("Character at index 7:", strCharAt.charAt(7));  // Output: "W"

// Example of charCodeAt() method
const strCharCodeAt = "A";
console.log("Char code at index 0:", strCharCodeAt.charCodeAt(0));  // Output: 65

// Example of split() method
const strSplit = "Hello, World!";
const resultSplit = strSplit.split(' ');
console.log("Split result:", resultSplit);  // Output: ["Hello", "World!"]
