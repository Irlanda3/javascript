//functions

//methods are built in functions. ex 'dave'.toLowerCase();

function sum(){
    return 2+2;
}

console.log(sum());

Math.random();

function suma(num1, num2){
    return num1 + num2;
}

console.log(suma(2,5));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("correo@gmail.com"));

// Anonimus functions. we need a name
const fnc = function(email) {
    return email.slice(0, email.indexOf("@"));
}

console.log(fnc("correo@gmail.com"));


//arrow functions

const flechafnc = (email) => {
    return email.slice(0, email.indexOf("@"));
};

console.log(fnc("correo@gmail.com"));


//another example

const toProperCase = (nombre) => {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}
console.log(toProperCase("dAvE"));



