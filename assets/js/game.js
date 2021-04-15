/*
    ROBOT GLADIATORS JAVASCRIPT CODE
*/

//user input
//Call window object's "prompt" method using "dot notation"
//Store in variable playerName, which stores values in the browser's memory
//var keyword, variable name, assignment operator, value being assigned, statement terminator
var playerName = window.prompt("What is your robot's name?");
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// this will do math and log 20
console.log(10 + 10);

//string concatenation
console.log("Our robot's name is " + playerName);

// This creates a function named "fight"

//Declare function
//function (keyword), function name, function parenthesis, function block opening brace (curly braces)
function fight() {
    //code block
    window.alert("The fight has begun!");
}

// fight();