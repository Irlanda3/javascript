function suma(num1, num2) {
    if (num2 === undefined) {
        // si num2 no es nada entonces en undefined y solo sumo qlnum1
        return num1 + num1;
    }
    return num1 + num2;
}

console.log(suma(4));