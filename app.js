/*
check for rock paper or scissors


*/
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => {

    let index = Math.floor(Math.random() * (choices.length));
    console.log('index ', index);
    return choices[index];

}
let player1Score = 0;
let computerScore = 0;
const playRound = (playerSelection, computerSelection) => {

    let playerVal = playerSelection.toLowerCase();
    let computerVal = computerSelection.toLowerCase();
    if (playerVal === 'rock' && computerVal === 'scissors') {
        player1Score++;
        return "You Win! rock beats scissors";

    } else if (playerVal === 'scissors' && computerVal === 'rock') {
        computerScore++;
        return "You Lose! rock beats scissors";
    } else if (playerVal === 'paper' && computerVal === 'rock') {
        player1Score++;
        return "You Win! paper beats rock";
    } else if (playerVal === 'rock' && computerVal === 'paper') {
        computerScore++;
        return "You Lose! paper beats rock";
    } else if (playerVal === 'scissors' && computerVal === 'paper') {
        player1Score++;
        return "You Win! scissors beats paper";
    } else if (playerVal === 'paper' && computerVal === 'scissors') {
        computerScore++;
        return "You Lose! scissors beats paper";
    } else {
        return "it's a tie";
    }





}




let game = () => {



    for (var i = 0; i <= 5; i++) {
        let playerSelection = prompt("enter rock, paper, or scissors");
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log("round " + i);
        while (round === "it's a tie") {
            playerSelection = prompt("it's a tie,enter a new choice");
            computerSelection = getComputerChoice();
            round = playRound(playerSelection, computerSelection);
        }
        console.log("result of round " + i + ": " + round);

    }

    if (player1Score > computerScore) {
        console.log("You won! your score:" + player1Score + " computer score: " + computerScore);
    } else if (computerScore > player1Score) {
        console.log("You Lost! your score:" + player1Score + " computer score: " + computerScore);
    } else {
        console.log("tie! your score:" + player1Score + " computer score: " + computerScore);
    }


}

game();