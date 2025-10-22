// Exercise 1
function guessNumberGame() {
	let compGuess = Math.floor(Math.random() * 10) + 1;
	let userGuess;

	do {
		userGuess = parseFloat(prompt('Guess a number between 1 and 10'));

		if (compGuess != userGuess) {
			alert(`You guessed ${userGuess}. Try again!`);
		}
	} while (compGuess != userGuess);

	console.log(
		`Whoop! Whoop! The number is ${compGuess} and your guess is ${userGuess}. You win!`
	);
}
