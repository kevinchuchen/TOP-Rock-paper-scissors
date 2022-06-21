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
	//playerSelection = e.target.getAttribute('class').split(' ')[1]; //returns rock, paper or scissors
	computerSelection = computerPlay();
	//var result = playRound(playerSelection, computerSelection);
	console.log(e);
	console.log(winCount);
	//firstToFive(result);
}
function firstToFive(result){
	var container = document.querySelector('.results');
	var winCount=0, lossCount=0;

	if(result === "win"){
		container.textContent = "Win!";
		winCount++;
	}
	else if(result === "lose"){
		container.textContent = "Try again!";
		lossCount++;
	}
}

var gameBtns = document.querySelectorAll('.gameBtn');
var winCount =5;
gameBtns.forEach((button) => {
	button.addEventListener('click', startGame);
});


