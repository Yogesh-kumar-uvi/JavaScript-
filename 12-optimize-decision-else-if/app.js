const userName = prompt('please enter you name ') || ('procoder')
const age = parseInt (prompt('enter you age')) || (22)
const gender = prompt('enter your gender')


console.log(`Name: ${userName}`)
console.log(`age:${age}`)
console.log(`gender:${gender}`)



if (age >= 5 && age <= 10){
    console.log(`${userName} is  kid.`);
} else if (age >= 11 && age <= 18){
    console.log(`${userName} is student and studies in school.`);
} else if (age >= 19 && age <= 24){
    console.log(`${userName} is student and studies in college.`);
}else if (age >= 24 && age <= 30){
    console.log(`${userName} is employee and he is in training phase`);
}else if (age >= 31 && age <= 50){
    console.log(`${userName} is working in the company`);
}

