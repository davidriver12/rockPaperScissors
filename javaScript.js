function generateRandom(limit=3){
    let rand = Math.random() * limit;
    rand = Math.floor(rand);
    return rand;
}

function getRandomPlay(){
    let playNum = generateRandom();
    if (playNum == 0){
        return 'rock';
    } else if (playNum == 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock'){
        if (computerSelection == 'rock'){
            return 'Tie!';
        } else if (computerSelection == 'paper'){
            return 'Computer wins!';
        } else {
            return 'Player wins!';
        }
    } else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            return 'Player wins!';
        } else if (computerSelection == 'paper'){
            return 'Tie!';
        } else {
            return 'Computer wins!';
        }
    } else {
        if (computerSelection == 'rock'){
            return 'Computer wins!';
        } else if (computerSelection == 'paper'){
            return 'Player wins!';
        } else {
            return 'Tie!';
        }
    }
}

function game(){
    for (let i = 0 ; i<5; i++){
        playerSelection = prompt('Choose your play:');
        computerSelection = getRandomPlay();
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()