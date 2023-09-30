const colorPicker = document.getElementById("colorPicker");
const randomButton = document.getElementById("randomButton");
const colorBox = document.getElementById("colorBox");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");

// Function to update the background color
function updateBackgroundColor() {
    const selectedColor = colorPicker.value;
    colorBox.style.backgroundColor = selectedColor;
    colorCode.textContent = selectedColor;
}

// Function to generate a random color
function generateRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    colorPicker.value = randomColor;
    updateBackgroundColor();
}

// Function to copy the color code to the clipboard
function copyColorCode() {
    const codeToCopy = colorCode.textContent;
    const tempInput = document.createElement("input");
    tempInput.value = codeToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Color code copied to clipboard: " + codeToCopy);
}

// Event listeners
colorPicker.addEventListener("input", updateBackgroundColor);
randomButton.addEventListener("click", generateRandomColor);
copyButton.addEventListener("click", copyColorCode);

// Initial call to set default color
updateBackgroundColor();
