let playerScore = 0;
let opponentScore = 0;
const choices = ['rock', 'paper', 'scissor'];

function computerPlay() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function oneRound(playerSelection, computerSelection){
	switch(playerSelection){
		case 'rock':
			if(computerSelection == 'rock'){
				return('A tie!');
			}
			else if(computerSelection == 'scissor'){
				playerScore++;
				return('Rock beats scissor! You win!');
			}
			else{
				opponentScore++;
				return('Paper beats rock! You lose!');
			}
			break;

		case 'paper':
			if(computerSelection == 'rock'){
				playerScore++;
				return('Paper beats rock! You win!');
			}
			else if(computerSelection == 'paper'){
				return('A tie!');
			}
			else{
				opponentScore++;
				return('Scissor beats paper! You lose!');
			}
			break;

		case 'scissor':
			if(computerSelection == 'rock'){
				opponentScore++;
				return('Rock beats scissor! You lose!');
			}
			else if(computerSelection == 'paper'){
				playerScore++;
				return('Scissor beats paper! You win!');
			}
			else{
				return('A tie!');
			}
			break;
	}		
}

function game(){
	var e = window.event, btn= e.target || e.srcElement;
	var result = oneRound(btn.id, computerPlay());

	document.querySelector("#playerScore").innerHTML = playerScore;
	document.querySelector("#computerScore").innerHTML = opponentScore;
	document.querySelector("#result").innerHTML = result;
}


