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
    let matchResult = ``;
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

    matchResult = `You ${matchStatus}! ${matchMessage}`;

    return matchResult;
}

const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your answer");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        console.log("\n\n");
    }
}

game();