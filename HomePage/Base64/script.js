const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
function encode() {
  try {
    const str = inputText.value;
    const encodedStr = btoa(str);
    outputText.innerHTML = encodedStr;
    console.log(encodedStr);
    outputText.classList.remove("error");
  } catch (e) {
    outputText.innerHTML = "Error encoding text to Base64.";
    outputText.classList.add("error");
  }
}

function decode() {
  try {
    const str = inputText.value;
    const decodedStr = atob(str);
    outputText.innerHTML = decodedStr;
    console.log(decodedStr);
    outputText.classList.remove("error");
  } catch (e) {
    outputText.innerHTML = "Error encoding text to Base64.";
    outputText.classList.add("error");
  }
}

function copyToClipboard() {
  const copyMessage = document.getElementById("copyMessage");
  const errorMessage = document.getElementById("errorMessage");
  navigator.clipboard
    .writeText(outputText.innerHTML)
    .then(() => {
      copyMessage.classList.add("show");
      setTimeout(() => {
        copyMessage.classList.remove("show");
      }, 2000);
    })
    .catch((err) => {
      errorMessage.classList.add("show");
      setTimeout(() => {
        errorMessage.classList.remove("show");
      }, 2000);
    });
}
