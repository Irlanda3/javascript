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
      //console.log(count);
      if (count > 0) {
        let numax = newArray.push(count);
        let numCount = Math.max(newArray);
        console.log("This is array push", numCount);
      }
    }

    console.log("");
  }
}
miniMaxsum();
