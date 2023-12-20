const loginForm = document.querySelector(".login-form");

const inputEvent = (event) => {
    event.preventDefault();

    const elements = {
        mail,
        password,
    }

    if (elements.mail.value === "" || elements.password.value === "") {
        return alert("Please, try again.")
    }
    return event.currentTarget.reset();
}



loginForm.addEventListener("submit", inputEvent)