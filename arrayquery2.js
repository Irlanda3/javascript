const stringArr = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

//  for each query string, determine how many times
//it occurs in the list of input strings.
// In this case, there are 2 instances od 'ab', 1 of abc and 0 of bc
// results = [2,1,0]
count = 1;
queries.forEach(myFunction);

function myFunction(items) {
  console.log(items); // imprime  primero ab
  //console.log(typeof items);

  for (let i in stringArr) {
    console.log(stringArr);
    if (items === i) {
      //ab==="ab"?, ab==="ab"?, ab==="ab?
      //console.log(count++);
      console.log(stringArr[i], "kechos");
    }
  }

  console.log("======== fuera del for loop ==");
}
