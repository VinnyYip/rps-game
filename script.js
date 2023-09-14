function getComputerChoice(){
    let choice = Math.floor(Math.random()*(3-1+1))+1;
    if(choice == 1){
        return "rock";
    }
    if(choice == 2){
        return "scissors";
    }
    if(choice==3){
        return "paper";
    }
}

function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if(player == "rock" && computer == "scissors"){
        return "You win! Rock beats scissors";
    }
    if(player == "rock" && computer == "paper"){
        return "You lose! Paper beats rock";
    }
    if(player == "rock" && computer == "rock"){
        return "It's a tie!";
    }
    if(player == "paper" && computer == "rock"){
        return "You win! Paper beats rock";
    }
    if(player == "paper" && computer == "scissors"){
        return "You lose! Scissors beats paper";
    }
    if(player == "paper" && computer == "paper"){
        return "It's a tie!";
    }
    if(player == "scissors" && computer == "paper"){
        return "You win! Scissors beats paper";
    }
    if(player == "scissors" && computer == "rock"){
        return "You win! Rock beats scissors";
    }
    if(player == "scissors" && computer == "scissors"){
        return "It's a tie!";
    }
}

function game(){
    while(i<5){
        let results = playRound(playerSelection,computerSelection);
        if(results.includes("win")==true){
            playerWins++;
        }
        if(results.includes("lose")==true){
            computerWins++;
        }

        if(playerWins == 3){
            console.log("You are the winner!");
            console.log(playerWins);
        }
        if(computerWins == 3){
            console.log("You are the loser!");
            console.log(computerWins);
        }
        i++;
    }
}


const playerSelection = prompt("Pick ur weapon")
const computerSelection = getComputerChoice();
let playerWins = 0;
let computerWins = 0;
let i = 0;
game();
