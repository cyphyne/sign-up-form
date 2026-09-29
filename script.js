const form = document.getElementById('formCard');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    form.classList.add('submitted');

    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsInput = document.getElementById('terms');

    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const agree = termsInput.checked;

    const fnameError = document.getElementById('fnameError');
    const lnameError = document.getElementById('lnameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const passwordMatchError = document.getElementById('passwordMatchError');
    const agreeError = document.getElementById('agreeError');

    let isValid = true;

    const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // Clear error messages
    fnameError.textContent = "";
    lnameError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    passwordMatchError.textContent = "";
    agreeError.textContent = "";

    // Clear invalid classes
    fnameInput.classList.remove('invalid');
    lnameInput.classList.remove('invalid');
    phoneInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    passwordInput.classList.remove('invalid');
    confirmPasswordInput.classList.remove('invalid');
    termsInput.classList.remove('invalid');

    // Name validation
    if (fname === '') {
        fnameError.textContent = "First name is required.";
        fnameInput.classList.add('invalid');
        isValid = false;
    }
    else if (!nameRegex.test(fname)) {
        fnameError.textContent = "Invalid name, please try again.";
        fnameInput.classList.add('invalid');
        isValid = false;
    }

    if (lname === '') {
        lnameError.textContent = "Last name is required.";
        lnameInput.classList.add('invalid');
        isValid = false;
    }
    else if (!nameRegex.test(lname)) {
        lnameError.textContent = "Invalid name, please try again.";
        lnameInput.classList.add('invalid');
        isValid = false;
    }

    // Phone validation
    if (phone === '') {
        phoneError.textContent = "Phone is required."
        phoneInput.classList.add('invalid');
        isValid = false;
    } 
    else if (!phoneRegex.test(phone))
    {
        phoneError.textContent = "Invalid phone number, please enter a valid number.";
        phoneInput.classList.add('invalid');
        isValid = false;
    }

    // Email validation
    if (email === '') {
        emailError.textContent = "Email is required."
        emailInput.classList.add('invalid');
        isValid = false;
    }
    else if (!emailRegex.test(email))
    {
        emailError.textContent = "Invalid email, please enter a valid email address.";
        emailInput.classList.add('invalid');
        isValid = false;
    }

    // Password validation
    if (password === '') {
        passwordError.textContent = "Password is required."
        passwordInput.classList.add('invalid');
        isValid = false;
    }

    if (confirmPassword === '') {
        confirmPasswordError.textContent = "Please confirm your password.";
        confirmPasswordInput.classList.add('invalid');
        isValid = false;
    }

    if (password !== '' && confirmPassword !== '' && password !== confirmPassword) {
        passwordMatchError.textContent = "Passwords do not match, please try again.";
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
        isValid = false;
    }

    // Terms Agreement validation
    if (!agree) {
        agreeError.textContent = "Please accept the terms and conditions to continue.";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        return true;
    }
    else {
        return false;
    }
});