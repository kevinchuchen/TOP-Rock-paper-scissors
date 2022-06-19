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

function game(){
	var P_winCount = 0;
	var C_winCount = 0;
	for(var i=0;i<5;i++){
		var playerSelection = prompt("Rock, Paper or Scissors?");
		var computerSelection = "scissors"//computerPlay();
		var playerResult = playRound(playerSelection, computerSelection);
		console.log("computer: " + computerSelection + "\t" + "Player: " + playerSelection);

		if(playerResult === "win"){
			P_winCount++;
			console.log("You win this round!")
		}
		else if(playerResult === "lose"){
			C_winCount++;
			console.log("You lost this round :(");
		}
		else{
			console.log("It's a draw");
		}
	}
	if(P_winCount > C_winCount)console.log("You won the match");
	else if(P_winCount < C_winCount) console.log("You lost the match");
	else console.log("This match is a draw");
}