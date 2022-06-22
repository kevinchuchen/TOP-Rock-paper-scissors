function computerPlay(){
	computerOutput = Math.floor(Math.random()*100 % 3);
	return (
		computerOutput === 0 ? "rock":
		computerOutput === 1 ? "paper":
		computerOutput === 2 ? "scissors":"Undefined"
	);
}

function playRound(playerSelection, computerSelection){
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerSelection.toLowerCase();
	
	if(playerSelection === "rock"){
		return(
			computerSelection === "scissors" ? "win":
			computerSelection === "paper" ? "lose":
			computerSelection === "rock" ? "draw":"undefined"
		);
	}
	else if(playerSelection === "paper"){
		return(
			computerSelection === "scissors" ? "lose":
			computerSelection === "paper" ? "draw":
			computerSelection === "rock" ? "win":"undefined"
		);
	}
	else if(playerSelection === "scissors"){
		return(
			computerSelection === "scissors" ? "draw":
			computerSelection === "paper" ? "win":
			computerSelection === "rock" ? "lose": "undefined"
		);
	}
	else return("error"); //enter rock,paper, or scissors only
}

function startGame(e){
	playerSelection = e.target.getAttribute('class').split(' ')[1]; //returns rock, paper or scissors
	computerSelection = computerPlay();
	var result = playRound(playerSelection, computerSelection);
	displayIcons(playerSelection, computerSelection);
	firstToFive(result);
}


function displayIcons(playerSelection, computerSelection){
	
	switch(playerSelection){
		case 'rock':
			playerIcon.textContent= "✊";
			break;
		case 'paper':
			playerIcon.textContent= "✋";
			break;
		case 'scissors':
			playerIcon.textContent= '✌';
			break;
	}
	switch(computerSelection){
		case 'rock':
			compIcon.textContent= "✊";
			break;
		case 'paper':
			compIcon.textContent= "✋";
			break;
		case 'scissors':
			compIcon.textContent= '✌';
			break;
	}

}

function firstToFive(result){

	if(result === "win"){
		container.textContent = "Win!";
		pScore.textContent = ++winCount;
		console.log(winCount);
	}
	else if(result === "lose"){
		container.textContent = "Try again!";
		cScore.textContent = ++lossCount;
	}
	else container.textContent = "Draw";
	
	//TODO: Add first to 5 win
	if(winCount === 5){
		resetGame();
	}
	else if(lossCount === 5){
		resetGame();
		
	}
	
}
function resetGame(){
	winCount = 0;
	lossCount = 0;
	pScore.textContent = 0;
	cScore.textContent = 0;
	playerIcon.textContent = '?';
	compIcon.textContent = '?';

}

var gameBtns = document.querySelectorAll('.gameBtn');
var container = document.querySelector('.gameResults');
var pScore = document.querySelector('.pScore');
var cScore = document.querySelector('.cScore');
var playerIcon = document.querySelector(".playerIcon");
var compIcon = document.querySelector(".compIcon");
var winCount =0;
var lossCount=0;

gameBtns.forEach((button) => {
	button.addEventListener('click', startGame);
});


