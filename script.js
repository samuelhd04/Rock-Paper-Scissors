function getComputerChoice() {
    const number = Math.random();

    if (number > 0.66) {
        return "rock";
    } else if (number > 0.33) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice:");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else {
        console.log("That's a draw!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (humanScore == computerScore) {
        console.log("It's a draw");
    } else {
        console.log("The computer won")
    }
}

playGame();


