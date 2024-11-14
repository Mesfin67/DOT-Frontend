const randomNumber = Math.floor(Math.random() * 10) + 1;

const userGuess = parseInt(prompt("Guess a number between 1 and 10"), 10);

if (userGuess === randomNumber) {
  alert("Good Work!");
} else {
  alert("Not matched");
}
