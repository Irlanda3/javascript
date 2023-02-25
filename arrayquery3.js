const stringArr = ["ab", "ab", "abc"];
//const iterator = stringArr.values();
const queries = ["ab", "abc", "bc"];

let count = 0;
queries.forEach(myFunction);

function myFunction(items) {
  console.log(">>>>>", items);

  //for (let value of stringArr.values) {
  //console.log(value);
  //}
  for (let valor of stringArr) {
    console.log("printing", valor);
    if (items === valor) {
      console.log("counting", count++); // este count me cuanta en general todas las repeticion
    }
  }
}
