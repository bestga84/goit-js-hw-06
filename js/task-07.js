const textEls = {
    fontSizeEl: document.querySelector("#font-size-control"),
    currentFontSizeEl: document.querySelector("text"),
}

textEls.fontSizeEl.addEventListener("input", () => {
    const fontSize = textEls.fontSizeEl.value;
    return textEls.currentFontSizeEl.style.fontSize = `${fontSize}px`;
});



console.log(textEls.fontSizeEl);
console.log(textEls.currentFontSizeEl);