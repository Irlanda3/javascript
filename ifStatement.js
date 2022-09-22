// conditionals: If statements

let soup = "chicken noodle soup";//the value of soup
let reply;// undefined variable

// the condition of our if statement is the value of soup
if(soup){// if soup has a value then... set the reply value equal to the string value
    reply = `Here's your order of ${soup}`; // a esto se lle lama templating lo del $
}
console.log(reply);