const validInputEl = document.querySelector("#validation-input");

validInputEl.addEventListener("blur", (event) => {
    const inputElLength = validInputEl.dataset.length;
    const currentElLength = event.currentTarget.value.length;

    if (currentElLength == inputElLength) {
        validInputEl.classList.add("valid");
        validInputEl.classList.remove("invalid");
        console.log("Ви ввели правильну кількість символів:", currentElLength);
    } else {
        validInputEl.classList.add("invalid");
        validInputEl.classList.remove("valid");
        console.log("Ви ввели неправильну кількість символів:", currentElLength);
    }
});

console.log(validInputEl);
console.log(inputElLength);
console.log(currentElLength);