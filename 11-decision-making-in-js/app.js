const userName = prompt('please enter you name ') || ('procoder')
const age = parseInt (prompt('enter you age')) || (22)


console.log(`Name: ${userName}`)
console.log(`age:${age}`)


if (age >= 5 && age <= 10){
    console.log(`${userName} is  kid.`);
}
if (age >= 11 && age <= 18){
    console.log(`${userName} is student and studies in school.`);
}
if (age >= 19 && age <= 24){
    console.log(`${userName} is student and studies in college.`);
}
if (age >= 24 && age <= 30){
    console.log(`${userName} is employee and he is in training phase`);
}
if (age >= 31 && age <= 50){
    console.log(`${userName} is working in the company`);
}

