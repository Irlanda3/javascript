const stringArr = ["ab", "ab", "abc"];
//const iterator = stringArr.values();
const queries = ["ab", "abc", "bc"];

queries.forEach(myFunction);

function myFunction(items) {
  console.log(">>>>>", items);

  //for (let value of stringArr.values) {
  //console.log(value);
  //}
  for (let valor of stringArr) {
    console.log("printing");
  }
}
