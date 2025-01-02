// Define an array named 'bikeCollection' containing a list of bike brands
const bikeCollection = ['honda', 'java', 'bullet', 'hero', 'kawasaki', 'tvs', 'bmw'];

// Update the element at index 2
bikeCollection[2] = 'activa';

// Print the entire array to the console to show the updated array
console.log(bikeCollection); 

// Access and print the element at index  
console.log(bikeCollection[4]); 

//<-------------------//Array methods//-------------------->

//pop()
bikeCollection.pop()
console.log(bikeCollection);

//push
bikeCollection.push('R15')
console.log(bikeCollection);

//shift 
bikeCollection.shift();
console.log(bikeCollection)

//unshift
bikeCollection.unshift('R15');
console.log(bikeCollection)

//concat 
const animals = ['cat','dog','cow','ox'] 
const birds = ['crow','parrot','pigeon','owl']
const mergedArray = animals.concat(birds)
console.log(mergedArray);

//indexOf()
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const index = fruits.indexOf("cherry");
console.log(index)

//includes()
console.log(fruits.includes("banana")); 
console.log(fruits.includes("grape")); 

//reverse() //it change the original array
console.log(fruits.reverse())

//sort() //it change the original array
console.log(fruits.sort())

//slice() //it change the original array
console.log(fruits.slice(1,3))

//splice()  //it change the original array
console.log(fruits.splice(2,1,'grapes'))
