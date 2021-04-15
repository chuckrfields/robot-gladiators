/*
    ROBOT GLADIATORS JAVASCRIPT CODE
*/

// //user input
// //Call window object's "prompt" method using "dot notation"
// //Store in variable playerName, which stores values in the browser's memory
// //var keyword, variable name, assignment operator, value being assigned, statement terminator
// var playerName = window.prompt("What is your robot's name?");
// console.log(playerName);

// console.log("This logs a string, good for leaving yourself a message");
// // this will do math and log 20
// console.log(10 + 10);

// //string concatenation
// console.log("Our robot's name is " + playerName);

// // This creates a function named "fight"

// //Declare function
// //function (keyword), function name, function parenthesis, function block opening brace (curly braces)
// function fight() {
//     //code block
//     window.alert("The fight has begun!");
// }

// // fight();
window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

//Array (zero-indexed)
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// console.log(enemyNames);
// var enemyName = "Roborto"; //primitive type
var enemyHealth = 50;
var enemyAttack = 12;


// //FOR STATEMENT (Control Flow)
// //For loop  (INTIAL EXPRESSION var increment = starting value;  CONDITION while increment less than ending value; INCREMENT add one increment)
// // i++ is the same as i = i + 1

// for (var i = 0; i < enemyNames.length; i++ ){
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

//Pseudocode:

// Game States
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robots
//   * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

//function expression assigns function to variable with parameter

//PARAMETER - Parameters often get confused with arguments because their syntax is similar. The main distinction between them is their purpose in the function. 
var fight = function(enemyRobot) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

         // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight "TRUTHY"
            if (confirmSkip) {
                console.log(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
            // // if no (false), ask question again by running fight() again "FALSY"
            // else {
            // fight();
         }

        // // if player choses to fight, then fight (conditional statement)
        // if (promptFight === "fight" || promptFight === "FIGHT") {
            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyRobot + ". " + enemyRobot + " now has " + enemyHealth + " health remaining.");
        
            // check enemy's health
            if (enemyHealth <= 0) {
                // window.alert(enemyRobot + " has died!");
                console.log(enemyRobot + " has died!");

                // award player money for winning
                playerMoney = playerMoney + 20;

                 // leave while() loop since enemy is dead
                break;
            } else {
                console.log(enemyRobot + " still has " + enemyHealth + " health left.");
            }
        
            // remove player's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyRobot + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        
            // check player's health
            if (playerHealth <= 0) {
                console.log(playerName + " has died!");
                // leave while() loop if player is dead
                break;
            } else {
                console.log(playerName + " still has " + playerHealth + " health left.");
            }
            // if player choses to skip

        // } else {
        //     window.alert("You need to choose a valid option. Try again!");
        // }
    }
  };

// fight();
//Loop through array to fight with each enemy robot
for (var i = 0; i < enemyNames.length - 1; i++) {
    // debugger;
    // call fight function with enemy robot
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}