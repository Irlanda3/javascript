// Strings
const myVariable = "Mathematics"

// The lenght property
console.log(myVariable.length);

console.log(myVariable.charAt(0));

console.log(myVariable.indexOf("mat"));

console.log(myVariable.slice(5, 8));
   
console.log(myVariable.slice(5));
console.log(myVariable.toUpperCase());

console.log(myVariable.includes("mat"));

console.log(myVariable.split("e")); // returns an array not including the e

console.log(myVariable.split(""));

console.log("john,joe,dave".split(","));

console.log("husky likes to run all day and nigth".split(" "));


//------numbers and number methods----

// an integeris a whole number
const myNumber = 42;
console.log(myNumber);


// a number with a decimal point is a float which references the ''floating point'
const myFloat =  42.0;
const myString = "42";

console.log(myNumber === myString);