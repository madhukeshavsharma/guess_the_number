// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById("userGuess").value;
    const message = document.getElementById("message");

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    } else {
        attempts++;

        if (userGuess == targetNumber) {
            message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            document.getElementById("userGuess").disabled = true;
        } else {
            message.textContent = userGuess < targetNumber ? "Too low. Try again!" : "Too high. Try again!";
        }
    }
}
