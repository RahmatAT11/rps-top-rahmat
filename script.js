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

console.log(getComputerChoice())