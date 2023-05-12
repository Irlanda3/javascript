const numbers = [1, 2, 3, 4, 5];

// filter out all even numbers
const filteredNumbers = numbers.filter(function(number) {
  return number % 2 !== 0;
});

console.log(filteredNumbers); // Output: [1, 3, 5]
