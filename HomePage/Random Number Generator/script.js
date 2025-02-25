function RNG() {
  const numberOfNumbers = document.getElementById("quantity");
  const HighestPossibleNum = document.getElementById("maxValue");
  const numberDisplay = document.getElementById("numberDisplay");
  console.log(numberOfNumbers.value);
  numberDisplay.textContent = "";

  for (let i = 0; i < numberOfNumbers.value; i++) {
    num = Math.floor(Math.random() * HighestPossibleNum.value);
    numberDisplay.textContent += " " + BigInt(num) + " ";
    console.log(num);
  }
}
