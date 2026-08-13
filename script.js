const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const lengthRequirement = document.getElementById("length");
const uppercaseRequirement = document.getElementById("uppercase");
const lowercaseRequirement = document.getElementById("lowercase");
const numberRequirement = document.getElementById("number");
const specialRequirement = document.getElementById("special");

const message = document.getElementById("message");

// Check password whenever the user types
passwordInput.addEventListener("input", checkPassword);

// Show / hide password
togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "Show";
    }

});

function checkPassword() {

    const password = passwordInput.value;

    // Password requirements
    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    // Update requirement indicators
    updateRequirement(lengthRequirement, hasLength, "At least 8 characters");
    updateRequirement(
        uppercaseRequirement,
        hasUppercase,
        "At least one uppercase letter"
    );
    updateRequirement(
        lowercaseRequirement,
        hasLowercase,
        "At least one lowercase letter"
    );
    updateRequirement(
        numberRequirement,
        hasNumber,
        "At least one number"
    );
    updateRequirement(
        specialRequirement,
        hasSpecial,
        "At least one special character"
    );

    // Calculate score
    let score = 0;

    if (hasLength) score++;
    if (hasUppercase) score++;
    if (hasLowercase) score++;
    if (hasNumber) score++;
    if (hasSpecial) score++;

    updateStrength(score);
}

function updateRequirement(element, valid, text) {

    if (valid) {
        element.textContent = "✅ " + text;
        element.classList.add("valid");
        element.classList.remove("invalid");
    } else {
        element.textContent = "❌ " + text;
        element.classList.add("invalid");
        element.classList.remove("valid");
    }

}

function updateStrength(score) {

    let percentage = score * 20;

    strengthBar.style.width = percentage + "%";

    if (score === 0) {

        strengthText.textContent = "Strength: Not checked";
        message.textContent = "";
        strengthBar.style.width = "0%";

    } else if (score <= 2) {

        strengthText.textContent = "Strength: Weak";
        message.textContent = "⚠️ Your password is weak.";
        message.style.background = "#fee2e2";
        message.style.color = "#dc2626";

    } else if (score === 3 || score === 4) {

        strengthText.textContent = "Strength: Medium";
        message.textContent = "🔶 Your password could be stronger.";
        message.style.background = "#fef3c7";
        message.style.color = "#d97706";

    } else {

        strengthText.textContent = "Strength: Strong";
        message.textContent = "✅ Excellent! Your password is strong.";
        message.style.background = "#dcfce7";
        message.style.color = "#16a34a";
    }

}