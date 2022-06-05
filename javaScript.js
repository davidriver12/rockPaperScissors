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
            computerScore += 1;
            return 'Point for computer!';
        } else {
            playerScore += 1;
            return 'Point for player!!';
        }
    } else if (playerSelection == 'paper'){
        if (computerSelection == 'rock'){
            playerScore += 1;
            return 'Point for player!';
        } else if (computerSelection == 'paper'){
            return 'Tie!';
        } else {
            computerScore += 1;
            return 'Point for computer!';
        }
    } else {
        if (computerSelection == 'rock'){
            computerScore += 1;
            return 'Point for computer!';
        } else if (computerSelection == 'paper'){
            playerScore += 1;
            return 'Point for player!';
        } else {
            return 'Tie!';
        }
    }
}

function checkWinner(playerScore, computerScore){
    if (playerScore >= 5){
        resultsDiv.textContent = '';
        resultsDiv.textContent += 'Player wins!'
        return true
    } else if (computerScore >= 5){
        resultsDiv.textContent = '';
        resultsDiv.textContent += 'Computer wins!'
        return true
    }   
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}

function game(playerSelection){
        computerSelection = getRandomPlay();
        resultsDiv.textContent += (playRound(playerSelection, computerSelection))
}

var playerScore = 0;
var computerScore = 0;
const resultsDiv = document.querySelector('#results');
const buttons = document.querySelectorAll('.btn');
buttons.forEach (btn => btn.addEventListener('click', function(){
    game(btn.id);
    checkWinner(playerScore, computerScore);
    if (playerScore >= 5 || computerScore >= 5){
        resetScore()
    }
}));