const stringArr = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

//  for each query string, determine how many times
//it occurs in the list of input strings.
// In this case, there are 2 instances od 'ab', 1 of abc and 0 of bc
// results = [2,1,0]
count = 1;
countab = 1;
countabc = 1;
countbc = 1;
queries.forEach(myFunction);

function myFunction(items) {
  console.log(items); // imprime  primero ab
  if (items === "ab") {
    console.log(count++);
    for (const i in stringArr) {
      console.log(stringArr[i], "stringArr");
      //if (items === string[i]) {
      //console.log("inside de if", count++);
      //if (items === "ab") {
      //console.log("found ab similar ab", items, countab++);
      //} //else if (items === "abc") {
      //console.log("found abc similar abc", items);
      //} else if (items === "bc") {
      //console.log("found bc similar bc");
      //}
    }
    if (items === "ab") {
      console.log(count++);
    }
  }
  console.log("========");
}
