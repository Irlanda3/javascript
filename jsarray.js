const arr = [5,6];
arr.push(7);
console.log(arr); 
//arr =  10; // error
//console.log(arr);
arr[0] = 8;
console.log(arr);

const addition = (a, b) => a+b;
const add5 = a => 5+a;
console.log(addition(6,7));
console.log(add5(6));

const arrayfrutas = ['banana','apple','tuna'];
console.log(arrayfrutas.pop());

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
