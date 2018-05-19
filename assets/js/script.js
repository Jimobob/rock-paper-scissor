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
				return('You both chose rock! That\'s a tie!');
			}
			else if(computerSelection == 'scissor'){
				playerScore++;
				return('Your rock beats their scissor! You win!');
			}
			else{
				opponentScore++;
				return('Their paper beats your rock! You lose!');
			}
			break;

		case 'paper':
			if(computerSelection == 'rock'){
				playerScore++;
				return('Your paper beats their rock! You win!');
			}
			else if(computerSelection == 'paper'){
				return('You both chose paper! That\'s a tie!');
			}
			else{
				opponentScore++;
				return('Their scissor beats your paper! You lose!');
			}
			break;

		case 'scissor':
			if(computerSelection == 'rock'){
				opponentScore++;
				return('Their rock beats your scissor! You lose!');
			}
			else if(computerSelection == 'paper'){
				playerScore++;
				return('Your scissor beats their rock! You win!');
			}
			else{
				return('You both chose scissor! That\'s a tie!');
			}
			break;
	}		
}

function start(){
	document.getElementById('modal').style.display = 'none';

	playerScore = 0;
	opponentScore = 0;

	document.querySelector('#result').innerHTML = ' ';
	document.querySelector('#playerScore').innerHTML = playerScore;
	document.querySelector('#computerScore').innerHTML = opponentScore;
}

function game(){
	var e = window.event, btn= e.target || e.srcElement;
	var result = oneRound(btn.id, computerPlay());

	document.querySelector("#playerScore").innerHTML = playerScore;
	document.querySelector("#computerScore").innerHTML = opponentScore;
	document.querySelector("#result").innerHTML = result;

	if(playerScore == 5 || opponentScore == 5){
		document.getElementById('modal').style.display = 'block';

		if(playerScore == 5){
			document.querySelector('#modal_message').innerHTML = 'Congratulation, you got 5 points so you win!';
		}
		else{
			document.querySelector('#modal_message').innerHTML = 'Sorry, the computer got 5 points so you lose!';
		}

		document.querySelector('#start').innerHTML = 'Play Again?';
	}
}


