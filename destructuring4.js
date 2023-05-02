/**
Exercise 4
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 4");

  let person = [12, "Chris", "Owen"];

  let firstName = person[1];
  let lastName = person[2];
  let age = person[0];

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
}

/** 

//asnwer
let person = [12, "chris", "owen"];
let [age, lastName, firstName] = person;

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
