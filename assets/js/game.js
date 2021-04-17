/*
    ROBOT GLADIATORS JAVASCRIPT CODE
*/

// MVP - Minimum Viable Product

// //user input
// //Call window object's "prompt" method using "dot notation"
// //Store in variable playerName, which stores values in the browser's memory
// //var keyword, variable name, assignment operator, value being assigned, statement terminator
// var playerName = window.prompt("What is your robot's name?");
// console.log(playerName);

console.log("Starting game");
// this will do math and log 20
console.log(10 + 10);

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
// window.alert("Welcome to Robot Gladiators!");

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
// "SHOP" - After defeating an enemy robot, allow player the choice to 'REFILL' their health, 'UPGRADE' their attack, or 'LEAVE' the store

//function expression assigns function to variable with parameter

//PARAMETER - Parameters often get confused with arguments because their syntax is similar. The main distinction between them is their purpose in the function. 
var fight = function(enemyName) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");
    while(playerHealth > 0 && enemyHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

         // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight "TRUTHY"
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
         }

         // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack -3, playerAttack);

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - damage);

        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
    
        // check enemy's health
        if (enemyHealth <= 0) {
            // window.alert(enemyRobot + " has died!");
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

                // leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0,  playerHealth - damage);

        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
  };

// function to start a new game
var startGame = function() {

    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        // console.log("Starting round " + (i + 1));

        // pick new enemy to fight based on the index of the enemyNames array
        //local scope
        var pickedEnemyName = enemyNames[i];
         
        // reset enemyHealth before starting new fight 
        enemyHealth = randomNumber(40, 60);  
  
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

        // if player is still alive and we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length -1) {
            // ask if player wants to visit the store before the next round
            var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

            if (storeConfirm) {
                shop();
            }
        }
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }

    // After loop ends, player is either out of health or enemies to fight
    endGame();
  };

// function to end game; FUNCTION EXPRESSION (vs Function Declaration which doesn't use variable)  
// REM: Hoisting (Javascript's default behavior of moving declarations to the top of the code) Function declarations can be called before they're declared
// BEST PRACTICE: Stick with Function Expression, as it enforces more structure to code base

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle. Game Over!");
    }

    // local scope variable
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

}

var shop = function() {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch(shopOptionPrompt) {
         case "REFILL": 
         case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again--Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
            shop();
            break;
    }
}

// Return random number between 0 and 1 multiplied by (max - min + 1) then add min, so we end up with number between min and max
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

// Start the game when the page loads
console.log("Hello Chuck");
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;
startGame();