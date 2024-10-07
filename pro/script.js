document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone_number').value;
    const password = document.getElementById('password').value;

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email.');
        return;
    }

    if (!phoneRegex.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        password: password
    };

    console.log(formData); // Log the data to the console
    alert('Form submitted successfully! Check the console for form data.');
});
