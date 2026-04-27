// FUNCTIONS

const choices = ["bato", "papel", "gunting"];
const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const gameResult = document.getElementById("gameResult");

function playGame(playerChoice){

    // Generate random choice for the computer
    // Math.floor rounds down to a whole number
    // Math.random to randomize the choice of the computer's choice
    // The computer's choice is a random index of 0 - 2
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Result
    let result = "";

    // Result if the choices are the same
    if(playerChoice == computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        // if the player chose bato and computer chose gunting
        switch(playerChoice){
            case "bato" :
                /* ? is a shorthand for if else, if the statement is true,
                it shows the left side, if false, it shows the right side. */
                result = (computerChoice == "gunting") ? "YOU WIN" : "YOU LOSE";
                break;
            case "papel" :
                result = (computerChoice == "bato") ? "YOU WIN" : "YOU LOSE";
                break;
            case "gunting" :
                result = (computerChoice == "papel") ? "YOU WIN" : "YOU LOSE";
                break;
        }
    }

    // ${playerChoice} is the placeholer for the player's choice
    playerChoiceDisplay.textContent = `PLAYER: ${playerChoice}`;
    
    // ${computerChoice} is the placeholer for the computer's choice
    computerChoiceDisplay.textContent = `COMPUTER: ${computerChoice}`;

    // to show the result
    gameResult.textContent = result;
}

