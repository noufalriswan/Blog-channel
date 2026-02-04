function validateLogin() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if (email === "") {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    if (password === "") {
        passwordError.textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    }

    if (valid) {
        alert("Login successful!");
    }

    return valid;
}

function togglePassword() {
    let password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}