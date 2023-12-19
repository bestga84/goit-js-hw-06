let counterValue = 0;

const dataEl = document.querySelector("#counter");

const buttonDecrement = dataEl.querySelector("button[data-action='decrement']");
const buttonIncrement = dataEl.querySelector("button[data-action='increment']");

buttonDecrement.addEventListener("click", () => {
    counterValue -= 1;
    updateCounterValue();
});

buttonIncrement.addEventListener("click", () => {
    counterValue += 1;
    updateCounterValue();
});

function updateCounterValue() {
    dataEl.querySelector("#value").textContent = counterValue;
}



// console.log(counterValue);
// console.log(dataEl);
// console.log(buttonDecrement);
// console.log(buttonIncrement);