Exercise 3
We have an object called 'user'.
Write the destructuring assignment that reads:
- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
{
  console.log("EXERCISE 3");

  let user = { name: "John", years: 30 };

  // your code to the left side:
  let {name, years:age, isAdmin="false"} = user; // a years le pasamos a age ahora

  console.log(name); // John
  console.log(age); // 30
  console.log(isAdmin); // false
  console.log();
}
