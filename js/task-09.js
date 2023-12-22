function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const mainColor = document.querySelector("body");
const colors = {
  btnChangeColor: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
  backColor: "rgb(255, 255, 255)",
}

mainColor.style.backgroundColor = colors.backColor;

colors.textContent = colors.backColor;

const changeBackColor = (event) => {
  const colorRandom = getRandomHexColor();
  mainColor.style.backgroundColor = colorRandom;
  colors.color.textContent = colorRandom;
};

colors.btnChangeColor.addEventListener("click", changeBackColor);