function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    let computerResponse = getRandomInt(1, 3);
    if (computerResponse == 1) {
        return "rock";
    } else if (computerResponse == 2) {
        return "paper";
    } else {
        return "scissors";
    }
} 



function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log("Tied");
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            return "playerWin";
    } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "playerLose";
    }
}



function game() {
    scorePlayer = 0;
    scoreComputer = 0;
    winningScore = 3
    for (let i = 0; i < 5; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("Rock, paper or scissors?");
        playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection) == "playerWin") {
                scorePlayer += 1;
            } else if (playRound(playerSelection, computerSelection) == "playerLose") {
                scoreComputer += 1;
            } else continue;
    }
    if (scorePlayer >= winningScore) {
        console.log("Player Wins");
        console.log(scorePlayer);
        console.log(scoreComputer);
    } else if (scoreComputer >= winningScore) {
        console.log("Player Loses");
        console.log(scorePlayer);
        console.log(scoreComputer);
    } else {
        console.log("Tied");
        console.log(scorePlayer);
        console.log(scoreComputer);
    }
}