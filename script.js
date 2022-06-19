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