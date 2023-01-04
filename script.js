let playerScore = 0;
let comScore = 0;
let isGameOn = true;
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".player-score");
const comScoreDisplay = document.querySelector("com-score");
const winnerDisplay = document.querySelector(".winner");

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getComputerChoice = () => {
    const randomChoice = getRndInteger(1, 3);
    let computerChoice;

    if (randomChoice === 3) {
        computerChoice = "Rock";
    } else if (randomChoice === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice
}

const playRound = (playerSelection, computerSelection) => {
    let matchResult = {};
    let matchMessage = ``;
    let matchStatus = ``;

    if (playerSelection.toLowerCase() === "rock") {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                matchStatus = "Draw";
                break;
            case "paper":
                matchStatus = "Lose";
                break;
            case "scissors":
                matchStatus = "Win";
                break;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                matchStatus = "Win";
                break;
            case "paper":
                matchStatus = "Draw";
                break;
            case "scissors":
                matchStatus = "Lose";
                break;
        }
    } else {
        switch (computerSelection.toLowerCase()) {
            case "rock":
                matchStatus = "Lose";
                break;
            case "paper":
                matchStatus = "Win";
                break;
            case "scissors":
                matchStatus = "Draw";
                break;
        }
    }
    
    switch (matchStatus.toLowerCase()) {
        case 'win':
            matchMessage = `${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`;
            break;
        case 'lose':
            matchMessage = `${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
            break;
        case 'draw':
            matchMessage = "Same selection";
            break;
    }

    // matchResult = `You ${matchStatus}! ${matchMessage}`;

    matchResult = {matchMessage: matchMessage, matchStatus: matchStatus};
    return matchResult;
}

function getResult(result, selection, scoreDisplay) {
    const playerSelection = selection;
    const computerSelection = getComputerChoice();
    const matchResult = playRound(playerSelection, computerSelection);

    result.innerHTML = matchResult.matchMessage;

    console.log(matchResult.matchStatus)

    if (matchResult.matchStatus === "Win") {
        playerScore += 1;
        scoreDisplay.player.innerHTML = playerScore;
    } else if (matchResult.matchStatus === "Lose") {
        comScore += 1;
        scoreDisplay.com.innerHTML = comScore;
    }
}

function gameSetup () {
    const btnRock = document.querySelector(".rock");
    const btnPaper = document.querySelector(".paper");
    const btnScissors = document.querySelector(".scissors");
    const result = document.querySelector(".result");
    const playerScoreDisplay = document.querySelector(".player-score");
    const comScoreDisplay = document.querySelector(".com-score");

    btnRock.addEventListener("click", () => getResult(result, "rock", {player: playerScoreDisplay, com: comScoreDisplay}));
    btnPaper.addEventListener("click", () => getResult(result, "paper", {player: playerScoreDisplay, com: comScoreDisplay}));
    btnScissors.addEventListener("click", () => getResult(result, "scissors", {player: playerScoreDisplay, com: comScoreDisplay}));
}

const game = () => {
    const winnerDisplay = document.querySelector(".winner");

    console.log(playerScore, " Player ", comScore, " Com")

    if (playerScore === 5) {
        winnerDisplay.innerHTML = "Player Win!";
        btnRock.removeEventListener('click');
        btnPaper.removeEventListener('click');
        btnScissors.removeEventListener('click');
        isGameOn = false;
    } else if (comScore === 5) {
        winnerDisplay.innerHTML = "Com Win!";
        btnRock.removeEventListener('click');
        btnPaper.removeEventListener('click');
        btnScissors.removeEventListener('click');
        isGameOn = false;
    }
}

gameSetup();

do {
    game();
    console.log("Still")
} while (isGameOn);