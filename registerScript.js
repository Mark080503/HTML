function validateForm() {
    var username = document.getElementById('username').value;
    var employeeNumber = document.getElementById('employee_number').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');
    var confirmPasswordField = document.getElementById('confirmPassword');

    if (username === '' || employeeNumber === '' || password === '' || confirmPassword === '') {
        errorMessage.innerText = 'Please fill out all fields.';
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerText = 'Passwords do not match. Please try again.';
        confirmPasswordField.style.border = '2px solid red';
        return false;
    } else {
        errorMessage.innerText = '';
        confirmPasswordField.style.border = ''; // Reset border style
    }

    return true;
}
