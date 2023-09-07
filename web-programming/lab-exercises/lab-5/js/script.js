/* 
    Name: Lixdel Louisse L. Aggabao
    File name: script.js
    Date created: July 19, 2023
    Description: This contains the scripts used in the Weekly Kitten Pictures sign-up form.
*/

const textInputs = document.getElementsByClassName("text-input");
const emailInput = document.getElementById("email");
const loginInput = document.getElementById("login");
const passInput = document.getElementById("pass");
const pass2Input = document.getElementById("pass2");
const newsletterInput = document.getElementById("newsletter");
const termsInput = document.getElementById("terms");
const errorMessages = document.getElementsByClassName("error-message");
const emailError = document.getElementById("email-error");
const loginError = document.getElementById("login-error");
const passError = document.getElementById("pass-error");
const pass2Error = document.getElementById("pass2-error");
const termsError = document.getElementById("terms-error");

// Alert user about possible spam
newsletterInput.addEventListener('change', function() {
    let isNewsletterChecked = this.checked;

    if (isNewsletterChecked) {
        alert("Please be aware of possible spam! By choosing to receive our newsletters, you may occasionally receive promotional emails.");
    }
});

// Validate email, username, password, and terms
function validate() {
    let emailPattern = /^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    let passwordLowercase = /[a-z]/;
    let passwordUppercase = /[A-Z]/;
    let email = emailInput.value.trim();
    let login = loginInput.value.trim();
    let pass = passInput.value;
    let pass2 = pass2Input.value;
    let isTermsAccepted = termsInput.checked;
    let isValid = true;

    // Remove all red borders from errors
    for (let index = 0; index < textInputs.length; index++) {
        textInputs[index].classList.remove("red-border");
    }
    
    // Remove all error messages
    for (let index = 0; index < errorMessages.length; index++) {
        errorMessages[index].innerHTML = "";
    }

    // Validate email structure
    if (!email || !emailPattern.test(email)) {
        emailInput.classList.add("red-border");
        emailError.innerHTML += "<p>Email address should be non-empty with the format xyz@xyz.xyz.</p>";
        isValid = false;
    }

    // Validate login name
    if (!login || login.length >= 20) {
        loginInput.classList.add("red-border");
        loginError.innerHTML += "<p>User name should be non-empty, and within 20 characters long.</p>";
        isValid = false;
    } else {
        loginInput.value = login.toLowerCase();
    }
    
    // Validate password
    if (!pass || pass.length < 6 || !passwordLowercase.test(pass) || !passwordUppercase.test(pass)) {
        passInput.classList.add("red-border");
        passError.innerHTML += "<p>Password should be at least 6 characters: 1 uppercase, 1 lowercase.</p>";
        isValid = false;
    }

    // Validate password confirmation
    if (!pass2 || pass !== pass2) {
        pass2Input.classList.add("red-border");
        pass2Error.innerHTML += "<p>Please retype password.</p>";
        isValid = false;
    }

    // Validate terms and conditions
    if (!isTermsAccepted) {
        termsError.innerHTML += "<p>Please accept the terms and conditions.</p>";
        isValid = false;
    }

    return isValid;
}