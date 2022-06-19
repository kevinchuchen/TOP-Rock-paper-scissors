function computerPlay(){
	computerOutput = Math.floor(Math.random()*100 % 3);
	return (
		computerOutput === 0 ? "rock":
		computerOutput === 1 ? "paper":
		computerOutput === 2 ? "scissors":"Undefined"
	);
}