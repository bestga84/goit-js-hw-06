const textEls = {
    fontSizeEl: document.querySelector("#font-size-control"),
    currentFontSizeEl: document.querySelector("#text"),
}

textEls.fontSizeEl.addEventListener("input", (evt) => {
    const fontSize = evt.currentTarget.value;
    return textEls.currentFontSizeEl.style.fontSize = `${fontSize}px`;
});



console.log(textEls.fontSizeEl);
console.log(textEls.currentFontSizeEl);