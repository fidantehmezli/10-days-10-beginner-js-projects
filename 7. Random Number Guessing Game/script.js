function checkGuess() {
	// Generate a random number between 1 and 10
	var number = Math.floor(Math.random() * 10) + 1;

	// Get the user's guess
	var guess = parseInt(document.getElementById("guess").value);

	// Show the computer's guess
	document.getElementById("computer-guess").innerText = "The computer guessed: " + number;

	// Check if the user's guess matches the computer's guess
	if (guess === number) {
		document.getElementById("result").innerText = "Congratulations! You guessed the correct number.";
	} else {
		document.getElementById("result").innerText = "Sorry, you guessed the wrong number.";
	}
}
