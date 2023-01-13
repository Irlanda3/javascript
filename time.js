// given a 12 am/pm time string convert to military time(24 hr)

const s = "07:05:45PM"; // should return 19:05:45.

if (s.includes("AM")) {
  console.log("This is AM time");
  console.log(s);
} else {
  console.log("This is pm time");
  //console.log(parseInt(s));
  let set1 = s.slice(0, 2);
  let set2 = s.slice(3, 5);
  let set3 = s.slice(6, 8);

  console.log(Number(set1)); // Number is used to convert str to number
  console.log(Number(set2));
  console.log(Number(set3));
}
