
//generate a random numbre from 1 to 3
switch(Math.floor(Math.random() * 3 + 1)) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);   
        break;
    case 2:
        console.log(3);
        break;

    default:
        console.log("No match");
}

// no match in this case bcaause of the data types



//Game

let playerOne = "rock";
let computer = "rock";

switch (playerOne) {
    case computer:
        console.log("tie game!");
        break;
    case "rock":
        if (computer === "paper"){
            console.log("computer wins!");

        }else{
            console.log("playerOne wins");
        }
        break;

    case "rock":
        if (computer === "paper"){
            console.log("computer wins!");

        }else{
            console.log("playerOne wins");
        }
        break;

    case "paper":
        if (computer === "scissors"){
            console.log("computer wins!");

        }else{
            console.log("playerOne wins");
        }
        break;

    defaut:
        if (computer === "rock"){
            console.log("computer wins!");

        }else{
            console.log("playerOne wins");
        }
        break;

}