//form stuff
function updateValue(value) {
    document.getElementById('currentValue').textContent = value;
}

// Password and Email validation
document.querySelector('form').addEventListener('submit', function (event) {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const email = document.getElementById('email');

    const emailPattern = email.pattern;
    password.classList.remove('recheck');
    confirmPassword.classList.remove('recheck');
    email.classList.remove('recheck');
    if (password.value !== confirmPassword.value) {
        event.preventDefault();
        alert('Passwords do not match.');
        password.classList.add('recheck');
        confirmPassword.classList.add('recheck');
        void password.offsetWidth;
        void confirmPassword.offsetWidth;

    } else if (!/^[a-zA-Z0-9]{8,}$/.test(password.value)) {
        event.preventDefault();
        alert('Password must be at least 8 characters long and can only be alpha-numeric.');
        password.classList.add('recheck');

    } else if (!new RegExp(emailPattern).test(email.value)) {
        event.preventDefault();
        alert('Invalid email format.');
        email.classList.add('recheck');
        void email.offsetWidth;
    }
});
