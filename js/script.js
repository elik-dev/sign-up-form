function validateSubmission(event) {
    checkPasswordMatch(password, confirmPassword);
    if (password.value === confirmPassword.value) {
        return true;
    } else {
        alert("Passwords does not match.");
        event.preventDefault();
        return false;
    }
}

function checkPasswordMatch() {
    if (password.value !== confirmPassword.value) {
        password.classList.add("not-matching");
        confirmPassword.classList.add("not-matching");
    } else {
        password.classList.remove("not-matching");
        confirmPassword.classList.remove("not-matching");
    }
}

const password = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#user-confirm-password");
const signUpForm = document.querySelector("form.right");

signUpForm.addEventListener("submit", validateSubmission);
confirmPassword.addEventListener("input", checkPasswordMatch);
password.addEventListener("input", checkPasswordMatch);