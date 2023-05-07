Exercise 6
Using Array Destructuring get the last name from the array. 
Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 6");

  const students = ['Christina', 'Jon', 'Alexandare'];

  // Write your code here
  const [] = students;

  console.log(lastName);
  console.log();
}

/**

Answer

const students = ['Christina', 'Jon', 'Alexandare'];
const [,,lastName] =  students;
console.log(lastName);
