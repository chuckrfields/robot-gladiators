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

// Return random number between 0 and 1 multiplied by (max - min + 1) then add min, so we end up with number between min and max
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}

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

// var playerName = window.prompt("What is your robot's name?");
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

// //FOR STATEMENT (Control Flow)
// //For loop  (INTIAL EXPRESSION var increment = starting value;  CONDITION while increment less than ending value; INCREMENT add one increment)
// // i++ is the same as i = i + 1

// for (var i = 0; i < enemy.names.length; i++ ){
//     console.log(enemy.names[i]);
//     console.log(i);
//     console.log(enemy.names[i] + " is at " + i + " index");
// }

// console.log(enemy.names[0]);
// console.log(enemy.names[1]);
// console.log(enemy.names[2]);
// console.log(enemy.names.length);

//Pseudocode:

// Game States
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robots
//   * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less
// "SHOP" - After defeating an enemy robot, allow player the choice to 'REFILL' their health, 'UPGRADE' their attack, or 'LEAVE' the store

var fightOrSkip = function() {
    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Enter the conditional recursive function call here!
    while (promptFight === "" || promptFight === null) {
        window.alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }

    promptFight = promptFight.toLowerCase();

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.playerMoney = playerInfo.money - 10;
            
            return true;
        }
    }

    return false;
}

//function expression assigns function to variable with parameter

//PARAMETER - Parameters often get confused with arguments because their syntax is similar. The main distinction between them is their purpose in the function. 
var fight = function(enemy) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    var isPlayerTurn = true;

    if (Math.random() > .5) {
        isPlayerTurn = false;
      }

    while(playerInfo.health > 0 && enemy.health > 0) {
        
        /*
        If it is the player-robot's turn:
        Prompt the fight or skip request
        Remove damage from enemy-robot's health
        Check if the enemy-robot has enough health to continue fighting
        */
        if (isPlayerTurn) {
            // ask player if they'd like to fight or run
            if (fightOrSkip()) {
                // if true, leave fight by breaking loop
                break;
            }

              // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemy.health = Math.max(0, enemy.health - damage);

            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining.");
        
            // check enemy's health
            if (enemy.health <= 0) {
                // window.alert(enemyRobot + " has died!");
                window.alert(enemy.name + " has died!");

                // award player money for winning
                playerInfo.money = playerInfo.money + 20;

                    // leave while() loop since enemy is dead
                break;
            } else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }
        
        }
        /*
        If it is not the player-robot's turn:
        Remove damage from the player-robot's health
        Check if the player-robot has enough health to continue fighting
        */
        else {
            // remove player's health by subtracting the amount set in the enemy.attack variable
            var damage = randomNumber(enemy.attack - 3, enemy.attack);
            playerInfo.health = Math.max(0,  playerInfo.health - damage);

            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        
            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                // leave while() loop if player is dead
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            }
        }
         /*
        After the turn is done, switch turns for the next bout of fighting:
        If the player-robot went first, run the logic for the enemy-robot attacking the player-robot
        If the enemy-robot went first, run the logic for the player-robot attacking the enemy-robot
         */
        isPlayerTurn = !isPlayerTurn;
    }
  };

// function to start a new game
var startGame = function() {

    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

        // debugger;
        // console.log("Starting round " + (i + 1));

        // pick new enemy to fight based on the index of the enemy.names array
        //local scope
        var pickedEnemyObj = enemyInfo[i];
         
        // reset enemy.health before starting new fight 
        pickedEnemyObj.health = randomNumber(40, 60);  
  
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
        fight(pickedEnemyObj);

        // if player is still alive and we're not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length -1) {
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

    //Get current high score (if any)
    var currentHighScore = localStorage.getItem("RobotGladiatorsHighScore");
    // if (currentHighScore === null) {
    //     currentHighScore = 0;
    //     alert("You set the high score! Your score is " + playerInfo.money );
    // }

    //shorthand: Short Circuit Conditional Statement
    /*
    The code means that if the highScore value is falsy (for example, null), then assign zero to highScore. 
    If not, retain whatever value is currently stored in highScore.
    */
    currentHighScore = currentHighScore || 0;
    
    if (playerInfo.money > currentHighScore) {
        localStorage.setItem("RobotGladiatorsHighScore", playerInfo.money);
        localStorage.setItem("RobotGladiatorsPlayerName", playerInfo.name);
        alert("You beat the high score! Your score is " + playerInfo.money );
    }
    else {
        alert("You did not beat the high score. Score to beat: " + currentHighScore);
    }

    // // if player is still alive, player wins!
    // if (playerInfo.health > 0) {
    //     window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    // }
    // else {
    //     window.alert("You've lost your robot in battle. Game Over!");
    // }

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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.");

    // use switch case to carry out action
  switch (parseInt(shopOptionPrompt)) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
      playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("Leaving the store.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");
      shop();
      break;
  }
}

// function to set name
var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
       name =  window.prompt("What is your robot's name?");
    }
    console.log("Your robot name is " + name);
    return name;
}

// Create Player Object with properties for name, health, attack and money (use dot.notation to retrieve: playerInfo.name)
// Objects can consist of properties and methods (functions)
// propertyname: propertyvalue (name value pairs)
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            this.health += 20;
            this.money -+ 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attack += 6;
            this.money -+ 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once like this
// console.log(playerName, playerAttack, playerHealth);

//Array (zero-indexed)
// var enemy.names = ["Roborto", "Amy Android", "Robo Trumble"];
// // console.log(enemy.names);
// // var enemy.name = "Roborto"; //primitive type
// var enemy.health = 50;
// var enemy.attack = 12;

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


// console.log(enemyInfo);
// console.log(enemyInfo[0]);
// console.log(enemyInfo[0].name);
// console.log(enemyInfo[0]['attack']);
        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

// Start the game when the page loads
 startGame();