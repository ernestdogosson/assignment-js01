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
		`Whoop! Whoop!. The number is ${compGuess} and your guess is ${userGuess}. You win!`
	);
}

// Exercise 2
function generateRandomArray(number) {
	const arr = [];

	for (let i = 1; i <= number; i++) {
		arr.push(Math.floor(Math.random() * 100) + 1);
	}

	return arr;
}

generateRandomArray();

// Exercise 3
const myArray = generateRandomArray(6);

function sumEvenNumbers(array) {
	let sumEven = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			sumEven = sumEven + array[i];
		}
	}
	return sumEven;
}

console.log(myArray);
console.log(sumEvenNumbers(myArray));
