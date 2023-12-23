const validInputEl = document.querySelector("#validation-input");

const InputElLength = validInputEl.dataset.length;

validInputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == InputElLength) {
        validInputEl.classList.add("valid");
        validInputEl.classList.remove("invalid");
    } else {
        validInputEl.classList.add("invalid");
        validInputEl.classList.add("valid");
    }
});

// console.log(validInputEl);
// console.log(InputElLength);
// console.log(expectedLength);