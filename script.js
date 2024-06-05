// variables

let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

const message = document.querySelector(".message");
const score = document.querySelector(".score");
const winner = document.querySelector(".winner");

// functions

function getWinner() {
    if (humanScore == 5 && computerScore == 5) {
        winner.textContent = "It's a draw!"
        humanScore = 0;
        computerScore = 0;
    } else if (humanScore == 5) {
        winner.textContent = "The Player is the winner!"
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        winner.textContent = "The Computer is the winner!"
        humanScore = 0;
        computerScore = 0;
    }
}

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

/*function getHumanChoice() {
    const choice = prompt("Enter your choice:");
    return choice;
}*/

function playRound(event) {
    const humanChoice = event.target.getAttribute("class");
    const computerChoice = getComputerChoice();

    if (humanScore == 0 && computerScore == 0) {
        winner.textContent = "Winner..."
    } 

    if (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") {
        message.textContent = "You win! Paper beats Rock";
        humanScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanChoice.toLowerCase() == "rock" &&
        computerChoice == "scissors") {
        message.textContent = "You win! Rock beats Scissors";
        humanScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanChoice.toLowerCase() == "scissors" &&
        computerChoice == "paper") {
        message.textContent = "You win! Scissors beats Paper";
        humanScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanChoice.toLowerCase() == "paper" &&
        computerChoice == "scissors") {
        message.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanChoice.toLowerCase() == "rock" &&
        computerChoice == "paper") {
        message.textContent = "You lose! Paper beats Rock";
        computerScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else if (humanChoice.toLowerCase() == "scissors" &&
        computerChoice == "rock") {
        message.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    } else {
        message.textContent = "That's a draw!";
        computerScore++;
        humanScore++;
        score.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
    }
    getWinner();
}

/*function playGame() {
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
}*/

