const choices = ['rock', 'paper', 'scissors'];
const choiceImages = {
    'rock': 'Assets/1.webp',
    'paper': 'Assets/2.webp',
    'scissors': 'Assets/3.webp'
};

function makeChoice(playerChoice) {
    // to disable buttons during animation
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    // fades out the title for a smoother transition to the result display
    const titleElement = document.getElementById('gameTitle');
    titleElement.classList.add('fade-out');

    // para ishow choosing animation
    const computerChoiceDiv = document.getElementById('computerChoice');
    const computerImage = document.getElementById('computerImage');
    computerChoiceDiv.classList.add('choosing');
    computerChoiceDiv.classList.remove('empty', 'rock', 'paper', 'scissors');
    computerImage.style.display = 'block';

    // animate cycling through choices
    let choiceIndex = 0;
    
    // set initial image immediately
    let currentChoice = choices[choiceIndex % 3];
    computerChoiceDiv.classList.add(currentChoice);
    computerImage.src = choiceImages[currentChoice];
    choiceIndex++;
    
    const cycleInterval = setInterval(() => {
        currentChoice = choices[choiceIndex % 3];
        computerChoiceDiv.classList.remove('rock', 'paper', 'scissors');
        computerChoiceDiv.classList.add(currentChoice);
        computerImage.src = choiceImages[currentChoice];
        choiceIndex++;
    }, 150);

    // thinking time
    setTimeout(() => {
        clearInterval(cycleInterval);
        
        // random choice for computer
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        // choice display for computer to update
        computerChoiceDiv.classList.remove('choosing', 'rock', 'paper', 'scissors');
        computerChoiceDiv.classList.add(computerChoice);
        computerImage.src = choiceImages[computerChoice];

        // for determining the winner
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);

        // re-enable buttons
        setTimeout(() => {
            buttons.forEach(btn => btn.style.pointerEvents = 'auto');
        }, 1000);
    }, 1000);
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }

    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'win';
    }

    return 'lose';
}

// for showing the result of the game
function displayResult(result) {
    const titleElement = document.getElementById('gameTitle');
    titleElement.classList.remove('fade-out');
    
    if (result === 'win') {
        titleElement.textContent = 'You Win!';
    } else if (result === 'lose') {
        titleElement.textContent = 'You Lose!';
    } else {
        titleElement.textContent = 'Draw!';
    }

    // after showing result, fade out and reset title for next game
    setTimeout(() => {
        titleElement.classList.add('fade-out');
    }, 2000);

    setTimeout(() => {
        titleElement.textContent = 'Bato-Bato-Pik';
        titleElement.classList.remove('fade-out');
    }, 3000);
}

function goBack() {
    // dito mag add ng navigation logic here
    alert('Back button clicked');
}
