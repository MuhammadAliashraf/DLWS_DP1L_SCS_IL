const myText = "Muhammad Ali";

console.log(myText.trim());
console.log(myText.trimStart());
console.log(myText.trimEnd());

// Methods (With Argument)
console.log(myText.includes("A")); // true OR false
console.log(myText.indexOf(2)); // true OR false

console.log(myText.replace("Ali", "Samra")); // Replace ALi to Samra

console.log(myText.replaceAll(myText, "Muhammad Shakir")); //Replace All

console.log(myText.concat(" Tu Pgl ho")); //Adding the String

const You = "03062767542";
const maskNumber = You.slice(6, 10).padStart(11, "*"); // *******7542

console.log(maskNumber);

console.log(You.padStart(32, "*"));
console.log(You.padEnd(32, "*"));

console.log(You.charAt(4)); //2 // Index de raha ha
console.log(myText.charCodeAt(0)); // This GIve ASci Code Of The Alhaebt
console.log(You.split("")); // ['0', '3', '0', '6', '2', '7', '6', '7', '5', '4', '2']

// What is String Template Literal?

const name = "Muhammad";
const age = 30;
const job = "Software Engineer";
const city = "Karachi";
const country = "Pakistan";

console.log(`My Name is ${name} & age is ${age}`);
