//Find ratio of zeroes, positive numbers and negative numbers in the Array
const arr = [6, -5, 4, 3, -7, 0];
//3 positivos
//2 negativos
//1 zero

// 3/6, 2/6, 1/6
let positive = 0;
let negative = 0;
let zero = 0;
function ratios(array) {
  array.forEach((element) => {
    //console.log(element);
    //if positive element count it
    if (element > 0) {
      positive++;
    } else if (element < 0) {
      negative++;
    } else if (element == 0) {
      zero++;
    }
  });
  console.log("How many positives", positive);
  console.log("How many negatives", negative);
  console.log("How many zeros", zero);

  let positiveElements = positive / array.length;
  let negativeElements = negative / array.length;
  let zeroElements = zero / array.length;

  console.log(positiveElements);
  console.log(negativeElements);
  console.log(zeroElements);
}
ratios(arr);
