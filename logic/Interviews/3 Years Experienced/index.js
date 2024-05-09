// if else  : Statement

// ternary Operaters : expression -- we can Store this value

// console.log(a); //undefined
// console.log(b); //b is not defined

// var a = b = 5;

// var a = 5;
// console.log(a++); //6 //5 Bcz:a++ is after the a not before the a
// console.log(a); //5  //6

// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //true //false

//object.freeze
//object.seal
//object.preventExtension

// Q:Freeze the key ID that anyOne CanNot be CHange
// const user = {
//   name: "John",
//   id: 123,
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// Object.defineProperties(user, { id: { writable: false } }); //ID is Forzeen

// user.id = 1;

// console.log(user.id);

// https://codeshare.io/0bg64Q