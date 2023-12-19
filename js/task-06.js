const validInputEl = document.querySelector("#validation-input");

const InputElLength = validInputEl.dataset.length;
const expectedLength = parseInt(validInputEl.getAttribute("data-length"));

validInputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.expectedLength.length >= InputElLength) {
        return validInputEl.classList.add("valid");
    } 
    return validInputEl.classList.add("invalid");
});



console.log(validInputEl);
console.log(InputElLength);
console.log(expectedLength);