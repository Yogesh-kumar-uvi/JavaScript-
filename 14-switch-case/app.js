// const dayNumber = parseInt(prompt('Enter your day number (1-7)'));

// debugger;

// switch (dayNumber) {
//     case 5:
//         console.log('It is Thursday today');
//         break;
//     case 1:
//         console.log('It is Sunday today');
//         break;
//     case 2:
//         console.log('It is Monday today');
//         break;
//     case 3:
//         console.log('It is Tuesday today');
//         break;
//     case 4:
//         console.log('It is Wednesday today');
//         break;
//     case 6:
//         console.log('It is Friday today');
//         break;
//     case 7:
//         console.log('It is Saturday today');
//         break;
//     default:
//         console.log('Invalid day number! Please enter a number between 1 and 7.');
// }

// console.log('Program ended!');


const userName = prompt('please enter you name ') || ('procoder')
const age = parseInt (prompt('enter you age')) || (22)
const gender = prompt('enter your gender')


console.log(`Name: ${userName}`)
console.log(`age:${age}`)
console.log(`gender:${gender}`)

debugger;

switch (true){
    case (age >= 5 && age <= 10):
    console.log(`${userName} is  kid.`);
    break;
    case (age >= 11 && age <= 18):
    console.log(`${userName} is student and studies in school.`);
    break;
    case (age >= 19 && age <= 24):
    console.log(`${userName} is student and studies in college.`);
    break;
    case (age >= 24 && age <= 30):
    console.log(`${userName} is employee and he is in training phase`);
    break;
    case (age >= 31 && age <= 50):
    console.log(`${userName} is working in the company`);
    break;
    default:
    console.log('User is no more in this world');
    }
console.log('Program Ended!');