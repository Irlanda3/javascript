let numeros = 0;
let count = 0;
function miniMaxsum(arr) {
  const arrayNums = [1, 3, 5, 7, 9];
  for (let nums of arrayNums) {
    numeros += nums;
    console.log(numeros);
    let index = arrayNums.indexOf(nums); //0 to 4
    console.log("en el index numero ", index);
    arrayNums.splice(index, 1, 0);
    console.log(arrayNums);
    const arrayCopy = [...arrayNums]; // copy array in ES6
    for (let elements of arrayCopy) {
      count += elements;
      console.log(count);
    }
  }
}

miniMaxsum();
//solo queremos sumar 4 numeros

//esto no se hace por que esta pointing by reference  osea a mismo espacio en memoria. Se esta cambiando el mimo array
//const newarr = [2, 3];
//const copyar = newarr;
//console.log(copyar);
