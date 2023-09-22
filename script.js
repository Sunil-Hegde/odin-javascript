console.log("Hello World!");
let computerChoice = '';
let playerChoice = '';
let playerWins = 0;
let computerWins = 0;
let gameStatement = '';
let gameStatus = '';
let finalStatement = '';
function playerSelection() {
    const takeChoice = Array.from(document.querySelectorAll('.hand'));
    const playerSelectionImage = document.querySelector('.playerSelectedImage');
    takeChoice.forEach(hand => hand.addEventListener('click', (e) => {
        const playerSelectionImageSource = e.target.getAttribute('src');
        playerChoice = e.target.alt;
        console.log("Player:", playerChoice);
        displayPlayerSelectionImage(playerSelectionImageSource, playerSelectionImage);
        computerSelection();
        playRound(playerChoice, computerChoice);
        console.log(playerWins);
        console.log(computerWins);
        console.log(gameStatement);
        if (playerWins === 3 || computerWins === 3) {
            resetGame();
        } else {
            gameStatus = '';
            finalStatement = '';
            updateFinalResult();
        }
    }));
}
function displayPlayerSelectionImage(imageSource, imageElement) {
    const newImage = new Image();
    newImage.onload = () => {
        newImage.width = 150;
        newImage.height = 150;
        imageElement.innerHTML = '';
        imageElement.appendChild(newImage);
    };
    newImage.src = imageSource;
}
function displayComputerSelectionImage(imageSource, imageElement) {
    const newImage = new Image();
    newImage.onload = () => {
        newImage.width = 150;
        newImage.height = 150;
        imageElement.innerHTML = '';
        imageElement.appendChild(newImage);
    };
    newImage.src = imageSource;
}
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function computerSelection() {
    const computerSelectionImage = document.querySelector('.computerSelectedImage');
    computerChoice = getComputerChoice();
    console.log("Computer:", computerChoice);
    displayComputerSelectionImage(`./images/${computerChoice}.png`, computerSelectionImage);
}
playerSelection(() => {
    console.log("Player:", playerChoice);
    console.log("Computer:", computerChoice);
    console.log("PlayerWins:", playerWins);
    console.log("ComputerWins:", computerWins);
    console.log("gameStatement:", gameStatement);
});
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        gameStatement = "Play again! The matrix is glitching, and you've triggered a paradox. Time to rethink your choices!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        playerWins++;
        gameStatement = `In the battle of wits, ${playerChoice} prevails! The computer's ${computerChoice} didn't stand a chance.`;
    } else {
        computerWins++;
        gameStatement = `Defeat tastes bitter as your ${playerChoice} falls to the superior intellect of the computer's ${computerChoice}.`;
    }
    updateScoreDisplay();
    updateGameStatement();
}
function resetGame() {
    console.log(`Game completed.`);
    gameStatus = "Game completed. The epic saga of Rock, Paper, and Scissors has reached its final chapter. Until the sequel!";
    if (playerWins === 3) {
        console.log("You Won!");
        finalStatement = "You're the Rock-Paper-Scissors champion! Start drafting your autobiography!";
        playerWins = 0;
        computerWins = 0;
    } else {
        console.log("You Lose!");
        finalStatement = "Better luck next time, but remember, it's all fun and games!";
        playerWins = 0;
        computerWins = 0;
    }
    updateFinalResult();
}
function updateScoreDisplay() {
    const playerWinsDisplay = document.querySelector('.player-wins');
    const computerWinsDisplay = document.querySelector('.computer-wins');
    playerWinsDisplay.textContent = `Player Wins: ${playerWins}`;
    computerWinsDisplay.textContent = `Computer Wins: ${computerWins}`;
}
function updateGameStatement() {
    const gameStatementDisplay = document.querySelector('.resultGameStatement');
    gameStatementDisplay.textContent = `${gameStatement}`;
}
function updateFinalResult() {
    const finalResultDisplay = document.querySelector('.finalResult');
    finalResultDisplay.innerHTML = `<p class="gameStatus">${gameStatus}</p><p class="finalStatement">${finalStatement}</p>`;
}
function resetGameScore() {
    computerChoice = '';
    playerChoice = '';
    playerWins = 0;
    computerWins = 0;
    gameStatement = '';
    gameStatus = '';
    finalStatement = '';
    updateScoreDisplay();
    updateGameStatement();
    updateFinalResult();
    const playerSelectionImage = document.querySelector('.playerSelectedImage');
    const computerSelectionImage = document.querySelector('.computerSelectedImage');
    playerSelectionImage.innerHTML = '';
    computerSelectionImage.innerHTML = '';
}
const startAgain = document.querySelector('.resetScore');
startAgain.addEventListener('click', resetGameScore);
