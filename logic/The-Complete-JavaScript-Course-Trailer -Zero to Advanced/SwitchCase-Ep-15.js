// console.log('This is Switch Case');
// const dayNumber = 9;
// switch (dayNumber) {
//   case 0:
//     console.log('Sunday');
//     break;
//   case 1:
//     console.log('Monday');
//     break;
//   case 2:
//     console.log('Tuesday');
//     break;
//   case 3:
//     console.log('Wednesday');
//     break;
//   case 4:
//     console.log('Thursday');
//     break;
//   case 5:
//     console.log('Friday');
//     break;
//   case 6:
//     console.log('Saturday');
//     break; //Break The Condition Here With Break Key Word
//   default: // Final Condition
//     console.log('Invalid Day Number');
// }

// //SeconD task Convnert the Below Code into Swithc Case:
const username = 'JavaScripte';
const userAge = 7;

// debugger

// if (!username) {
//   username = 'Procodrr'
// }

if (username) {
  console.log(`Name: ${username}`);
}

if (userAge) {
  console.log(`Age: ${userAge}`);
}

// console.log(`Name: ${username}`)
// console.log(`Age: ${userAge}`)

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// } else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// } else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// } else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// } else if (userAge > 45 && userAge < 121) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// } else if (userAge >= 121) {
//     console.log(`${username} is immortal.`);
//     console.log('And he/she reads newspaper.');
// } else {
//     console.log('Please Enter a Valid Age');
// }

// Converted!
switch (true) {
  case userAge >= 0 && userAge <= 4:
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
    break;
  case userAge >= 5 && userAge <= 17:
    console.log(`${username} is a kid.`);
    console.log('And he/she is learning science and maths.');
    break;
  default:
    console.log('Please Enter a Valid Age!');
    break;
}

console.log('Program Ended!!');

const grade = 'B';

switch (grade) {
  case 'A':
    console.log('Student Got A Grade');
    break;
  case 'B':
    console.log('Student Got B Grade');
    break;
  case 'C':
    console.log('Student Got C Grade');
    break;
  case 'D':
    console.log('Student Got D Grade');
    break;
  default:
    console.log('Student Failed');
}
