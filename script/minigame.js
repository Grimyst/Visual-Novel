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

    // para ishow choosing animation
    const computerChoiceDiv = document.getElementById('computerChoice');
    const computerImage = document.getElementById('computerImage');
    computerChoiceDiv.classList.add('choosing');

    // thinking time
    setTimeout(() => {
        // random choice for computer
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        
        // choice display for computer to update
        computerChoiceDiv.classList.remove('choosing', 'empty', 'rock', 'paper', 'scissors');
        computerChoiceDiv.classList.add(computerChoice);
        computerImage.src = choiceImages[computerChoice];
        computerImage.style.display = 'block';

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

function displayResult(result) {
    const titleElement = document.getElementById('gameTitle');
    
    if (result === 'win') {
        titleElement.textContent = 'You Win!';
    } else if (result === 'lose') {
        titleElement.textContent = 'You Lose!';
    } else {
        titleElement.textContent = 'Draw!';
    }
}

function goBack() {
    // dito mag add ng navigation logic here
    alert('Back button clicked');
}
