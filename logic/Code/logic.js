// // // let a=5;
// // // let b=10;
// // // replacing value
// // // // 1st logic  pass
// // // b=b-a;
// // // a=b+b;
// // // second logic pass
// // // a=a+5;
// // // b=a/2;
// // // third logic pass
// // // a=a*2;
// // // b=a-5;
// // // forth logic pass
// // // a=b*3;
// // // a=a/3;
// // // b=b/2;
// // let a=5;
// // let b=10;
// // let c=20;
// // // Question 1: a=20,b=20,c=10
// // // logic one  pass
// // // a=a*4;
// // // b=c;
// // // c=c/2;
// // // second logic pass
// // // a=c;
// // // b=c;
// // // c=a-10;
// // // third logic  only use -+
// // // a=b+b;
// // // b=a;
// // // c=b-10;
// // console.log(`A=${a}`)
// // console.log(`b=${b}`)
// // console.log(`c=${c}`)

// // 1-20-2023
// // Q2: Given a string, reverse each word in the sentence
// // Problem::
// // For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
// // var string = 'Welcome to this Javascript Guide!'
// // var str1=string.split("").reverse().join("");
// // console.log(str1)

// // Q:- Find the sum of all elements/numbers of a given array?

// // using array reduce() method

// // var arr = [1, 2, 5, 10, 20] // Question Give Array

// // var sum = arr.reduce((a, i) => {
// //   return a + i
// // })

// // console.log(sum)

// // logic number no 1
// // var sum = 0
// // for (let i= 0; i<arr.length; i++) {
// //     sum += arr[i]
// // }
// // console.log(sum)

// // logic number no 2
// // var sum = 0
// // var i = 0
// // while (i < arr.length) {
// //     sum +=arr[i]
// //     i++;
// // }
// // console.log(sum)

// // Q:- Find the output?

// var a = 3
// var b = a++
// var c = ++a

// console.log(a)
// console.log(b)
// console.log(c)

// Q:- How to convert an Object {} into an Array [] in JavaScript?
// let obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };

// const objtoarrayKeys=Object.keys(obj)
// const objtoarrayValues=Object.values(obj)
// const objtoarrayentries=Object.entries(obj)
// console.log(objtoarrayKeys);
// console.log(objtoarrayKeys);
// console.log(objtoarrayentries);

// Q:- How to convert an Array [] to Object {} in JavaScript?
// let arr = ["1", "Test User", "25", "Developer"];
// let arr1 = [
//     ["id", "1"],
//     ["name", "Test User"],
//     ["age", "25"],
//     ["profession", "Developer"],
//   ];

// const arr2=Object.assign({},arr1);
// const arr3={...arr1};
// const arr4=Object.fromEntries(arr1);
// console.log(arr)
// console.log(arr2);
// console.log(arr3);
// console.log("arr4");\

// const arr=[1,2,3]
// const newarr=arr.map(function(num){
//     return num *2;
// })
// console.log(newarr)

// console.log([],[])

//Higher Order Functions Convert old Compoent to new Comonent

// Problem:
// Write a function called "uniqueElements" that takes in an array of numbers as input. The function should return a new array that contains only the unique elements from the original array, in the order they appear.
// const func = () => {
//   const uniqueElements = [1, 2, 3, 2, 4, 5, 4, 6, 7, 6, 8]
//   const filteredArray = uniqueElements.filter((value, index, arr) => {
//       return arr.indexOf(value) === index
//     })
//     console.log(filteredArray)
// }
// func()

// const newfun=()=>{
//     const uniqueElements = [1, 2, 3, 2, 4, 5, 4, 6, 7, 6, 8]
//     const newarr=uniqueElements.forEach((value,index,arr)=>{
//         return console.log(value)
//     })
// }
// newfun()

// Date-6/27/23
// Write a function called sumArray that takes in an array of numbers and returns the sum of all the numbers in the array.
// Using reduce Method
// Where first parameter Of reduce function a and a taking the value on each time when they run
// function SummOfArray() {
//   const arr = [2, 4, 4, 90];
//   const sum = arr.reduce((a, b) => a + b);
//   console.log(sum);
// }
// SummOfArray();
// using for loop
// var arr = [2, 4, 10];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// Write a function called isPalindrome that takes in a string and returns true if the string is a palindrome, and false otherwise.
// var name = "Maham";
// function isPalindrome() {
//   console.log(name);
// }

// isPalindrome(name);

// // Spread operator and Destructuring
// // Example:1 taking average useing Sprread operator
// const arr = [1, 2, 3, 4, 5, 6];
// function average(a, b, c) {
//   return a + b + c / 3;
// }
// const a = average(...arr);
// console.log(a);

// // Example:2 making New arrar with old array include
// // Where [...arr] having all the elements of the old array
// const newarr = [...arr, 7, 8, 9, 10];
// console.log(newarr);

// // Example:3 copy OLd array
// const b = [...arr];
// console.log(b);

// // Example:4 Concatenaation in array
// const c = [1, 2, 3, 4, 5];
// const d = [6, 7, 8, 9, 10];
// // concatrnating c and d in conarray
// const conarray = [...c, ...d];
// console.log("Concating Array", conarray);

// //Sperad operators With Objects
// const obj1 = {
//   name: "ali",
//   age: 20,
//   program: "BSCS",
// };
// console.log("obj1", obj1);
// // Copy All the elements From obj1 and cHange the name to Muhammad Ali

// const obj2 = { ...obj1, name: "Muhammad Ali" };
// console.log("obj2", obj2);

// // Example:2  getting the value From Object Called Desturing
// const { name, age, program } = obj1;
// console.log(name, age, program);

// ----------------------------------------------async------------------------------------------------
// console.log("Upper Console")
// setTimeout(()=>{
//   console.log("In Side Functions!");
// },1000)
// console.log("Lower Console")

// ----------------------------------------Map-Filter-Reduce-----------------------
// //Map
// let a = [1, 2, 3, 4, 5, 6];
// let b = a.map((value, index) => {
//   //Wo km jo Array ki har value k st karna ho like anthing Example is Given Below
//   return value * 2;
//   //getting the new array in b and each value multiply by 2
// });
// // console.log(a)
// // console.log(b)

// //Filter : This is use to Filter the Data From Array And return Aa new Array
// let c = [12, 23, 345, 546, 12, 2, 1, 3, 4, 55, 6, 324, 5634, 3, 4, 234, 87, 10];
// // getting the value less then 10
// let d = c.filter((value) => {
//   return value < 10;
// });
// // console.log(c);
// // console.log("Values Less then 10 From c",d);

// //Reduce"
// let e = [2, 2, 6];
// let f = e.reduce((value1, value2) => {
//   return value1 + value2;
// });
//BackEnd Working Of reduce Menthod
//f=10 why?
// 2,2,6
// 2+2,6
// 4,6
// 4+6,
// 10
// console.log(f)

// JS FUNCTIONS

// MAP : Old Array Ko Convert Karta ha New array main jb hm Array k Each elemnt k st koi b opreation perform karty hn
// const numbers = [0, 1, 2, 3, 4, 5]

// const newnumbers = numbers.map((e) => e * 2)

// // Filter :ya hm ko True or false ki base par new array return karta ha kesi condition ki base par

// const filter1 = [0, 1, 'a', 'a', 'a', 'a', 'a', 'b', true, false]

// const filter2 = filter1.filter((e) => {
//   return e
// })

// // Reduce: Merage the small item into single value
// const Add = [2, 4, 6, 8, 10]

// const Added = Add.reduce((e, i) => {
//   return e + i
// })

// const l1 = [2, 4, 3];
// const l2 = [5, 6, 4];

// const l4 = l1.reverse().join("");
// const l5 = l2.reverse().join("");

// const list = parseInt(l4) + parseInt(l5);
// let digits = [...list.toString()].map(Number);
// console.log(digits.reverse());

// Data Types
// premitive Data Type
// Number
// String
// null
// undefined
// Boolean
// // non premitive Data Type
// Object
// Array

// class MyClass{ // Type OF Class Is Function Behind The seen

// }

// --------------------------Promise Form Chai Or Code
//Without Connecting to .then
// const promiseOne = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task Completed");
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("Promise Resolved");
// });

// //Promise with .then connection
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async Task Two Promise Resolved!");
// });

// //Data Passing in  The Resolve + Error With Reject
// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const Number = 2 + 2;
//     if (Number === 4) {
//       resolve(Number);
//     } else {
//       reject(`Condition fail`);
//     }
//   }, 1000);
// });

// promiseThree
//   .then((data) => {
//     console.log("Calculation Result", data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// //Where Data Go when we recive in the in then

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       const data = {
//         name: "John Doe",
//         age: 30,
//       };
//       resolve(data);
//     } else {
//       reject("There is an error");
//     }
//   }, 1000);
// });

// promiseFive
//   .then((myData) => {
//     return myData.name; //Yahan sy Data return Hoga New Then Main variable Ban kar nh kar skty hm.... /// State main save kar wa lo Data
//   })
//   .then((username) => {
//     console.log("Username :", username);
//   })
//   .catch((error) => {
//     console.log("ERROR:", error);
//   });

// //Handle Promise Using async & await
// const promiseSix = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       const data = {
//         name: "Promise Six",
//         age: 30,
//       };
//       resolve(data);
//     } else {
//       reject("There is an error in Promise Six");
//     }
//   }, 1000);
// });

// const usingPromiseSix = async () => {
//   try {
//     const data = await promiseSix;
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// usingPromiseSix();

// // API CALL USING URL=https://fakestoreapi.com/products/

// const getAllProducts = async () => {
//   try {
//     const res = await fetch("https://fakestoreapi.com/products/1");
//     const product = await res.json(); //time taking into json
//   } catch (error) {
//     console.error(error);
//   }
// };
// getAllProducts();

// //with .then & .catch method

// //Problem # 1
// // Promise Resolved When the Button is Clicked
// const Myloading = new Promise((resolve, reject) => {
//   resolve();
// });

// const btn = document.getElementById("btn").addEventListener("click", () => {
//   Myloading.then(() => {
//     console.log("Promise Resolved With Button Click");
//   });
// });

// async function myFun() {
//   let result = (await 2) + 2;
//   return result;
// }

// const res = myFun();
// console.log(res);

// ///////////
// const useAwait = async () => {
//   console.log("first");
//   await console.log("Second");
//   console.log("third");
// };

// useAwait()

// ----------------------------------The Complete JavaScript Course | Trailer | Zero to Advanced-----------------------------------------

// Story of JavaScript | JavaScript History | The Complete JavaScript Course | Ep.01 ---- Notes


// Brendan Eich Developer Of JavaScript
// ECMA (Organization): Europen Computer Manufacturers Association 
// Google V8 Engine

// REPL === console.log 


