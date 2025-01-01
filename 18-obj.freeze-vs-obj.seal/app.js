// Example of Object.freeze()
const frozenObject = { name: 'Yogesh', age: 21 };
Object.freeze(frozenObject);

// Attempting to modify the frozen object
frozenObject.name = 'Yuvi';    // Not allowed, will be ignored in non-strict mode
frozenObject.gender = 'male'; // Adding new property not allowed
delete frozenObject.age;       // Deletion not allowed

console.log('Frozen Object:', frozenObject);
// Output: { name: 'Yogesh', age: 21 }

// Example of Object.seal()
const sealedObject = { name: 'Yogesh', age: 21 };
Object.seal(sealedObject);

// Modifying existing property
sealedObject.name = 'Yuvi';    // Modification allowed

// Attempting to add or delete properties
sealedObject.gender = 'male'; // Adding not allowed
delete sealedObject.age;       // Deletion not allowed

console.log('Sealed Object:', sealedObject);
// Output: { name: 'Yuvi', age: 21 }
