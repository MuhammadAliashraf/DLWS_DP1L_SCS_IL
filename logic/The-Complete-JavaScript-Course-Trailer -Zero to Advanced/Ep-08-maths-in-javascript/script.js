console.log(Math.sqrt(16));
console.log(Math.pow(2, 6));
console.log(Math.floor(2.345345)); //  2 nichy karta ha
console.log(Math.floor(-2.345345)); // -3
console.log(Math.ceil(2.345345)); // number ko oper kar de ga

console.log(Math.round(2.4)); // 2
console.log(Math.round(2.6)); // 3
console.log(Math.round(Math.random())); //

var rNumber = Math.random() * 100;
console.log(rNumber);

var removeDecimal = Math.round(rNumber);

console.log(removeDecimal);
// lets remove the decimal Part

// let make a program to generate the number bwt 5-6

var rNumberTwo = Math.round(Math.random() * 5);
console.log(rNumberTwo);

let min = 2;
let max = 10;

let limitedNumber = Math.floor(Math.random() * (max - min)) + min;
console.log(limitedNumber);

// Lets Make a Game To Guess the Number

const userGuess = prompt("Guess Number 2-10");

function GuessNumber(userGuess) {
  let min = 2;
  let max = 10;
  let answer = Math.floor(Math.random() * (max - min)) + min;
  if (userGuess === answer) {
    alert("You Win!!!!!!!!");
  } else {
    alert(`Oops Wrong Guess Correct Answer is ${answer}`);
  }
}

GuessNumber(userGuess);
