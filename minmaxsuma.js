let numeros = 0;

function miniMaxsum(arr) {
  const arrayNums = [1, 3, 5, 7, 9];
  const newArray = [];

  for (let nums of arrayNums) {
    console.log(nums, " is element of the array");
    let index = arrayNums.indexOf(nums); //0 to 4
    console.log("en el index numero ", index);

    const copia = [...arrayNums];
    copia.splice(index, 1, 0);
    console.log("After slice method", copia);

    numeros += nums; // suma todos los numeros en el array
    console.log("numeros", numeros);
    const arrayCopy = [...arrayNums]; // copy array in ES6
    let count = 0;
    for (let elements of copia) {
      count += elements;
      console.log(count);

      //console.log(typeof newArray);
      //console.log(Array.isArray(newArray));
    }
    newArray.push(count);
    Math.max(newArray);
    console.log("", count); // este si me imprime los numeros finales sumados
  }
  console.log("New array", newArray);
  console.log(
    "Max number ",
    Math.max(...newArray),
    "Min number",
    Math.min(...newArray)
  );
  //console.log("Min number", Math.min(...newArray));
}
miniMaxsum();
