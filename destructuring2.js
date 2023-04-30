Exercise 2
Rewrite the code below to assign each number to the right variable.
*/
{
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [one, two, three, four, five, six] = numbers;

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log();
}

/**

//Answer

console.log("Example 2")
let numbers = [3, 5, 4, 2, 6, 1];
let [three, five, four, two, six, one] = numbers;
console.log(`three: ${three}, five: ${five}, four: ${four}, two: ${two}, six: ${six}, one: ${one}`);
