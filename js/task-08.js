const loginForm = document.querySelector(".login-form");

const inputEvent = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please, try again.")
    };
    const userData = {email: email.value, password: password.value};
    console.log(userData.email);
    console.log(userData.password);
    console.log(userData);
    event.currentTarget.reset();
};

loginForm.addEventListener("submit", inputEvent);