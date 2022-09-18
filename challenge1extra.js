const anyName = "conejo";
console.log(anyName.length);
console.log(anyName.charAt(2));
console.log(Math.random());// random regresa un numero entre 0 y 1 sin incluir el uni
console.log(Math.floor(0.5));// el math floor de 0.5 es 0

console.log(Math.floor(Math.random()*anyName.length));

// Ahora si un programa que regrese una letra random de cualquier nombre
console.log(anyName.charAt(Math.floor(Math.random()*anyName.length)));