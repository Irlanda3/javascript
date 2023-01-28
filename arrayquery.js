const string = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "bc"];

//  for each query string, determine how many times
//it occurs in the list of input strings.
// In this case, there are 2 instances od 'ab', 1 of abc and 0 of bc
// results = [2,1,0]

queries.forEach(myFunction);

function myFunction(items) {
  console.log(items);
  for (const i in string) {
    console.log(string[i], "string");
  }
}
