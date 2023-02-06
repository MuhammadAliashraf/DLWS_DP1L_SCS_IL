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
// console.log(arr4);

