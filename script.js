function getComputerChoice(){
    let choice = Math.floor(Math.random()*(3-1+1))+1;
    if(choice == 1){
        return "Rock";
    }
    if(choice == 2){
        return "Scissors";
    }
    if(choice==3){
        return "Paper";
    }
}
