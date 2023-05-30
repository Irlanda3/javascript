Exercise 2. Use the completed code from the previous task, but convert the conditionals to a switch statement.
When you code the solution, the output in the console should remain exactly the same as in the previous question.

Note: You'll need three separate cases for the three medals, and a default case for all other values of the i variable.



// answer
for(var i = 1; i <=10; i++){

    switch(i){
        case 1:
            console.log('Gold medal');
            break;

        case 2:
            console.log('Silver medal');
            break;

        case 3:
            console.log('Bronce medal');
            break;

        default:
            console.log(i);
    }
}
