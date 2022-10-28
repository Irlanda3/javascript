
const participantes = []; // necesito declarar el array aqui porq si no se inicializa cada vez que llamo la fn
function add(agregando) {
    
    participantes.push(agregando);
    

    //console.log(participantes.length);
    //console.log(participantes);
}
// we use push to add to an array so we do not have holes
// push adds to the end of the array
add('ae');
add('io'); 
add('u1'); 
add('23'); 

const receivers = participantes;
console.log("receivers,  ",  receivers);

//create an empty list fot he matches
const matches = [];
//
// este funciona en el browser
//let name = prompt(" please enter you name.");
//console.log(name);

//Since ES5, you can use the built-in forEach method: It loops atravez del array y regresa cada palabra
participantes.forEach(function(giver) {
    const random = giver[Math.floor(Math.random() * giver.length)];
    //console.log(random);// it returns every word in the array
    //console.log(random);
    // a ese value que viene siendo cada elemento del array le voy assignar un elemento random
    giver.push()// add sombody from the receivers list pero no a la lista sino como algomas visual que diga fulano le da a sultano

  }); 


 // now we to add tot he array by user input
 //let person = Window.prompt("message");
 //console.log(add(person));


 // when we get all participants then ramdonly assign each other.

