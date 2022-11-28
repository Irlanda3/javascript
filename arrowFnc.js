//FUNCION CLASICA - HOISTING
function saludar(nombre) {
  return "hola " + nombre;
}

console.log(saludar("David"));

//HOISTING: UNA FUNCION LA PUEDO LLAMAR DESDE CUAL QUIER PARTE DEL CODIGO
//PUEDO INCLUSO LLAMARLA DESDE LA LINEA 1

//FUNCION ANONIMA
// EN ESTE CASO EL HOISTING NO SE PUEDE HACER. SE TIENE QUE LLAMAR DESPUES DE DECLARAR

let saludo = function (nombre) {
  return "Saludos " + nombre;
};
console.log(saludo("David"));

// FUNCIONES FLECHA () => {}
let saludos2 = (nombre) => {
  "Saludos " + nombre;
};
//OR
let salu2 = (nombre) => "saludos " + nombre;

let suma = (a, b) => a + b;
//https://www.youtube.com/watch?v=HVEkbCZAuqA
