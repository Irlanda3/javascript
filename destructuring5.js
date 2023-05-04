Exercise 5
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 5");

  let person = ["Chris", 12, "Owen"];

  let firstName = person[0];
  let lastName = person[2];

  console.log(`Name: ${firstName} ${lastName}`);
  console.log();
}
//answer

 let person = ["Chris", 12, "Owen"];
 let [firstName, ,, lastName] = person;
