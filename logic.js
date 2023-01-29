// // let a=5;
// // let b=10;
// // replacing value
// // // 1st logic  pass
// // b=b-a;
// // a=b+b;
// // second logic pass
// // a=a+5;
// // b=a/2;
// // third logic pass
// // a=a*2;
// // b=a-5;
// // forth logic pass
// // a=b*3;
// // a=a/3;
// // b=b/2;
// let a=5;
// let b=10;
// let c=20;
// // Question 1: a=20,b=20,c=10
// // logic one  pass
// // a=a*4;
// // b=c;
// // c=c/2;
// // second logic pass
// // a=c;
// // b=c;
// // c=a-10;
// // third logic  only use -+
// // a=b+b;
// // b=a;
// // c=b-10;
// console.log(`A=${a}`)
// console.log(`b=${b}`)
// console.log(`c=${c}`)

// 1-20-2023
// Q2: Given a string, reverse each word in the sentence
// Problem::
// For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
// var string = 'Welcome to this Javascript Guide!'
// var str1=string.split("").reverse().join("");
// console.log(str1)

// Q:- Find the sum of all elements/numbers of a given array?

// using array reduce() method

var arr = [1, 2, 5, 10, 20] // Question Give Array

var sum = arr.reduce((a, i) => {
  return a + i
})

console.log(sum)

// logic number no 1
// var sum = 0
// for (let i= 0; i<arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)

// logic number no 2
// var sum = 0
// var i = 0
// while (i < arr.length) {
//     sum +=arr[i]
//     i++;
// }
// console.log(sum)
