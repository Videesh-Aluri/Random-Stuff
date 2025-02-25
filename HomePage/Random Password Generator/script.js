const characters = [];

function RPG() {
  let length = document.getElementById("passwordLength");
  let symbolCount = 0;
  let includeSymbols = document.getElementById("includeSymbols");

  let numberCount = 0;
  let includeNumbers = document.getElementById("includeNumbers");

  let uppercaseCount = 0;
  let includeUppercase = document.getElementById("includeUppercase");

  let lowercaseCount = 0;
  let includeLowercase = document.getElementById("includeLowercase");

  const passwordDisplay = document.getElementById("passwordDisplay");
  passwordDisplay.textContent = "";
  characters.length = 0;
  const truelenght = length.value;

  if (length <= 0) {
    alert("Please enter a valid password length.");
    return;
  }
  console.log(
    "true",
    includeSymbols + includeNumbers + includeUppercase + includeLowercase <
      length
  );
  if (
    symbolCount + numberCount + uppercaseCount + lowercaseCount < length ===
    false
  ) {
    for (let i = 0; i < length.value; i++) {
      randomType = Math.floor(Math.random() * 4);
      switch (randomType) {
        case 0:
          if (includeSymbols.checked === true) {
            symbolCount++;
          } else {
            randomType = Math.floor(Math.random() * 4);
            length.value++;
          }
          break;
        case 1:
          if (includeNumbers.checked === true) {
            numberCount++;
          } else {
            randomType = Math.floor(Math.random() * 4);
            length.value++;
          }
          break;
        case 2:
          if (includeUppercase.checked === true) {
            uppercaseCount++;
          } else {
            randomType = Math.floor(Math.random() * 4);
            length.value++;
          }
          break;
        case 3:
          if (includeLowercase.checked === true) {
            lowercaseCount++;
          } else {
            randomType = Math.floor(Math.random() * 4);
            length.value++;
          }
          break;
      }
    }
  }

  length.value = truelenght;
  console.log(
    "counts",
    symbolCount,
    numberCount,
    uppercaseCount,
    lowercaseCount
  );

  for (let SC = 0; SC < symbolCount; SC++) {
    let symbol = Math.floor(Math.random() * 15) + 33;
    console.log(String.fromCharCode(symbol));
    characters.push(String.fromCharCode(symbol));
  }

  for (let NC = 0; NC < numberCount; NC++) {
    let number = Math.floor(Math.random() * 10) + 48;
    console.log(String.fromCharCode(number));
    characters.push(String.fromCharCode(number));
  }

  for (let UC = 0; UC < uppercaseCount; UC++) {
    let uppercase = Math.floor(Math.random() * 26) + 65;
    console.log(String.fromCharCode(uppercase));
    characters.push(String.fromCharCode(uppercase));
  }

  for (let LC = 0; LC < lowercaseCount; LC++) {
    let lowercase = Math.floor(Math.random() * 26) + 97;
    console.log(String.fromCharCode(lowercase));
    characters.push(String.fromCharCode(lowercase));
  }

  // Shuffle the characters array
  //The Fisher-Yates shuffle algorithm
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  // Join the characters into a string to form the password
  let password = characters.join("");
  console.log(characters);
  passwordDisplay.textContent += password;
}

function copyToClipboard() {
  const passwordDisplay = document.getElementById("passwordDisplay");
  let password = characters.join("");
  navigator.clipboard
    .writeText(password)
    .then(() => {
      passwordDisplay.innerHTML = "Password copied to clipboard!";
    })
    .catch((err) => {
      passwordDisplay.innerHTML = "Failed to copy password: " + err;
    });
}
