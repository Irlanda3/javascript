import fetch from "node-fetch";
console.log("hola");
fetch("https://regres.in/api/users").then((response) =>
  console.log(response.json())
);
