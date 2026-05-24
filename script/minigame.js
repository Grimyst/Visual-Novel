const choices = ['rock', 'paper', 'scissors'];
const defaultPlayerChoiceImages = {
    'rock': 'Assets/1.webp',
    'paper': 'Assets/2.webp',
    'scissors': 'Assets/3.webp'
};
const defaultComputerChoiceImages = {
    'rock': 'Assets/1.webp',
    'paper': 'Assets/2.webp',
    'scissors': 'Assets/3.webp'
};
const config = window.minigameConfig || {};
const playerChoiceImages = config.playerChoiceImages || defaultPlayerChoiceImages;
const computerChoiceImages = config.computerChoiceImages || defaultComputerChoiceImages;
const backgroundImage = config.backgroundImage || '';

function makeChoice(playerChoice) {
    // to disable buttons during animation
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    // keep the title fixed and show result in the dedicated banner
    const titleElement = document.getElementById('gameTitle');
    titleElement.classList.remove('fade-out');
    titleElement.textContent = config.gameTitle || 'Bato-Bato-Pik';

    const resultMessage = document.getElementById('resultMessage');
    resultMessage.classList.remove('show');
    resultMessage.textContent = '';

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
    computerImage.src = computerChoiceImages[currentChoice];
    choiceIndex++;
    
    const cycleInterval = setInterval(() => {
        currentChoice = choices[choiceIndex % 3];
        computerChoiceDiv.classList.remove('rock', 'paper', 'scissors');
        computerChoiceDiv.classList.add(currentChoice);
        computerImage.src = computerChoiceImages[currentChoice];
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
        computerImage.src = computerChoiceImages[computerChoice];

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
    const resultMessage = document.getElementById('resultMessage');
    resultMessage.classList.remove('show');
    
    if (result === 'win') {
        resultMessage.textContent = 'You Win!';
    } else if (result === 'lose') {
        resultMessage.textContent = 'You Lose!';
    } else {
        resultMessage.textContent = 'Draw!';
    }

    resultMessage.classList.add('show');

    setTimeout(() => {
        resultMessage.classList.remove('show');
        resultMessage.textContent = '';
    }, 2000);
}

window.addEventListener('DOMContentLoaded', () => {
    if (config.playerName) {
        const playerNameEl = document.getElementById('playerName');
        if (playerNameEl) playerNameEl.textContent = config.playerName;
    }

    if (config.opponentName) {
        const opponentNameEl = document.getElementById('opponentName');
        if (opponentNameEl) opponentNameEl.textContent = config.opponentName;
    }

    if (config.gameTitle) {
        const gameTitleEl = document.getElementById('gameTitle');
        if (gameTitleEl) gameTitleEl.textContent = config.gameTitle;
    }

    if (backgroundImage) {
        document.body.style.backgroundImage = `url('${backgroundImage}')`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
    }
});

function goBack() {
    // dito mag add ng navigation logic here
    alert('Back button clicked');
}
