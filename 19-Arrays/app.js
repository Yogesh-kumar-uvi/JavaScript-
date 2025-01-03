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

// looping an array 
//for loop
const petAnimals = ['dog','cow','cat','goat']
for (let i=0; i<petAnimals.length; i++){
    console.log(petAnimals[i]);
}

// while loop
let i =0;
while(i<petAnimals.length){
    console.log(petAnimals[i])
    i++
}

//inbuilt Loop methods
//map()
const numbers=[1,2,3,4,5,6]
const newNums = numbers.map((items,index,array)=>{
return items + 5;
})
console.log(newNums)

//filter()
const newNumbers = numbers.filter((items,index,array)=>{
    return items > 3;
    })
    console.log(newNumbers)

//reduce
const newNumber = numbers.reduce((prev,items)=>{
    return prev + items;
    },0)
    console.log(newNumber)

// spread and rest operators
let num =[1,2,3]    
let num2 =[4,5,6]  
const finalNum = [num,num2]  
console.log(finalNum)

//spread
let num0 =[1,2,3]    
let num1 =[4,5,6]  
const finalNumber = [...num,...num2]  
console.log(finalNumber)

function sum(...numbers){
    return numbers;
}
console.log(sum(num0,num2));