const userName = prompt('Please enter your name') || 'Procoder';
const age = parseInt(prompt('Enter your age')) || 22;
const gender = prompt('Enter your gender (male/female/other)');

console.log(`Name: ${userName}`);
console.log(`Age: ${age}`);
console.log(`Gender: ${gender}`);

// debugger

if (age >= 5 && age <= 10) {
    if (gender === 'male') {
        console.log(`${userName} is a young boy.`);
    } else if (gender === 'female') {
        console.log(`${userName} is a young girl.`);
    } else {
        console.log(`${userName} is a young kid.`);
    }
} else if (age >= 11 && age <= 18) {
    if (age <= 14) {
        console.log(`${userName} is a middle school student.`);
    } else {
        console.log(`${userName} is a high school student.`);
    }
} else if (age >= 19 && age <= 24) {
    if (gender === 'male') {
        console.log(`${userName} is a college student preparing for his career.`);
    } else if (gender === 'female') {
        console.log(`${userName} is a college student preparing for her career.`);
    } else {
        console.log(`${userName} is a college student preparing for their career.`);
    }
} else if (age >= 25 && age <= 30) {
    if (age <= 27) {
        console.log(`${userName} is a junior employee in the training phase.`);
    } else {
        console.log(`${userName} is likely a senior employee.`);
    }
} else if (age >= 31 && age <= 50) {
    if (age <= 40) {
        console.log(`${userName} is a mid-level employee progressing in their career.`);
    } else {
        console.log(`${userName} is a senior employee or manager.`);
    }
} else {
    if (age > 50) {
        console.log(`${userName} might be retired or enjoying their golden years.`);
    } else {
        console.log(`Age is not classified.`);
    }
}

console.log('program end !')