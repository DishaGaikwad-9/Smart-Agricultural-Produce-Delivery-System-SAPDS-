function validateForm() {
    const name = document.getElementById('name').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const location = document.getElementById('location').value.trim();
    const bankDetails = document.getElementById('bank-details').value.trim();
    const farmerType = document.getElementById('farmer-type').value;

    // Validate if all fields are filled
    if (!name || !contact || !location || !bankDetails || !farmerType) {
        alert('Please fill out all fields before submitting!');
        return false;
    }

    // Validate contact number (only digits, 10 digits)
    const contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
        alert('Please enter a valid contact number (10 digits).');
        return false;
    }

    // Validate bank account details (allow alphanumeric)
    const bankRegex = /^[a-zA-Z0-9\s]*$/;  // Alphanumeric + spaces
    if (!bankRegex.test(bankDetails)) {
        alert('Bank account details should only contain letters, numbers, and spaces.');
        return false;
    }

    // If validation passes
    alert('Registration Successful!');
    return true;
}
