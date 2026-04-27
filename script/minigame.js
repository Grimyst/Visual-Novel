// FUNCTIONS

const choices = ["BATO", "PAPEL", "GUNTING"];
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
        // switch case for the different outcomes
        switch(playerChoice){
            // if the player chose BATO and computer chose GUNTING
            case "BATO" :
                /* ? is a shorthand for if else, if the statement is true,
                it shows the left side, if false, it shows the right side. */
                result = (computerChoice == "GUNTING") ? "YOU WIN" : "YOU LOSE";
                break;
                // if the player chose PAPEL and computer chose BATO
            case "PAPEL" :
                result = (computerChoice == "BATO") ? "YOU WIN" : "YOU LOSE";
                break;
                // if the player chose GUNTING and computer chose PAPEL
            case "GUNTING" :
                result = (computerChoice == "PAPEL") ? "YOU WIN" : "YOU LOSE";
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

