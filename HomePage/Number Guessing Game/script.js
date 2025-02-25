function checkGuess() {
  const minNum = document.getElementById("minNum");
  const highNum = document.getElementById("highNum");

  const numOfGuesses = document.getElementById("numOfGuesses");
  if (parseInt(highNum.value) < parseInt(minNum.value)) {
    alert("The minimum number is greater than the high number");
    return;
  }
  if (parseInt(numOfGuesses.value) < 1) {
    alert("The number of guesses must be greater than 0");
    return;
  }
  if (parseInt(highNum.value) == "" || parseInt(minNum.value) == "") {
    alert("Please enter a number");
    return;
  }
  if (parseInt(highNum.value) == parseInt(minNum.value)) {
    alert("The minimum number is equal to the high number");
    return;
  }

  if (parseInt(highNum.value) > 9007199254740991) {
    alert("The high number is too large");
    return;
  }
  if (parseInt(minNum.value) < -9007199254740991) {
    alert("The low number is too small");
    return;
  }

  console.log(parseInt(minNum.value));
  console.log(parseInt(highNum.value));

  const num =
    Math.floor(Math.random() * parseInt(highNum.value)) +
    parseInt(minNum.value);
  console.log(parseInt(num));

  for (let i = 0; i < numOfGuesses.value; i++) {
    const guess = prompt(
      "Guess a number between " + minNum.value + " and " + highNum.value
    );
    if (guess == parseInt(num)) {
      alert("You guessed the number!");
      break;
    } else if (guess < parseInt(num)) {
      alert("Your guess is too low");
    } else if (guess > parseInt(num)) {
      alert("Your guess is too high");
    } else if (parseInt(guess) === true) {
      alert("Not a Number");
    }
  }
  alert("The number was " + num);
}
