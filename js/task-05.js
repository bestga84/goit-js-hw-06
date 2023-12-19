const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
    if (event.currentTarget.value.length === 0) {
        return (outputText.textContent = "Anonymous");
    }

    return outputText.textContent = event.currentTarget.value;    
});




// console.log(inputText);
// console.log(outputText);