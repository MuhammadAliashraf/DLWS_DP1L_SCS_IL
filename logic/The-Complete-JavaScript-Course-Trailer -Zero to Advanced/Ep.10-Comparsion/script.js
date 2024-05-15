const var1 = 3;
const var2 = 4;

// ==
// Returns true if the operands are equal.
console.log("==");
console.log(3 == var1);
console.log("3" == var1);
console.log(3 == "3");

console.log("!=");
// Not equal (!=)
// Returns true if the operands are not equal.

console.log(3 != 3); // Agar same Nh hogya tu true dega
console.log("3" != var1);
console.log(3 != "3");

// Strict equal (===) Also Check The Type Of
console.log("===");
console.log(3 === var1);
console.log("3" === var1);
console.log(3 === "3");

// Strict not equal (!==)
console.log("!==");

console.log(3 !== var2); //true
console.log("3" !== var1);
console.log(3 !== "3");

// Greater than or equal (>=)
console.log(">=")

console.log(3 >= var2); //false
console.log("3" >= var1);// true
console.log(3 >= "3");// ture

// Less than or equal (<=)
console.log("Less than or equal    (<=) ")


console.log(3 <= var2); //true
console.log("3" <= var1);// true
console.log(3 <= "3");// ture




