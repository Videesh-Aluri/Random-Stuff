function CharacterCount() {
  const textInput = document.getElementById("textInput");
  console.log("Length:", textInput.textLength);
  console.log("Value:", textInput.value);

  const charCount = document.getElementById("charCount");
  console.log("TextContent:", charCount.textcontent);
  charCount.textcontent = "";
  charCount.innerHTML = "Characters:" + textInput.textLength;
}
