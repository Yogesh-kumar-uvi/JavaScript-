// const user = {
//     name: 'yogesh',
//     age: 21,
//     gender: 'male',
// }
// console.log(user.name)
// console.log(user["age"])



const user = {
    firstName: 'yogesh',
    lastName: 'kumar',
    age: 21,
    gender: 'male',
    education:{
        degree: 'B.tech',
        university: 'aktu',
        cgpa: 7.5
    }
};

// Adding a new property
user["is-student"] = true;

// Accessing object values
console.log(user.firstName);  // Output: yogesh
console.log(user["age"]);     // Output: 21

// Updating object values
user.firstName = 'Yuvi';      // Update firstName
console.log(user.firstName);  // Output: Yuvi


