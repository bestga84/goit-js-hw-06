function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const els = {
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
  divBox: document.querySelector("#boxes"),
}

const createBoxes = (amount) => {
  let sizeOfFirstBox = 10;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    els.divBox.append(box);
    box.style.height = `${sizeOfFirstBox}px`;
    box.style.width = `${sizeOfFirstBox}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    sizeOfFirstBox += 10;
  };
};

// console.log(box.style.height);
// console.log(box.style.width);
// console.log(box.style.backgroundColor);


els.btnCreate.addEventListener("click", () => {
  if (els.input.value >= 1 || els.input.value <= 100) {
    return createBoxes(els.input.value);
  };
});


const destroyBoxes = ("click", () => {
  els.divBox.innerHTML = "";
});