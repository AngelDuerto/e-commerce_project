// Add an event listener to the form 
document.getElementById('contacForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Getting data in the form fields
    const firstName = document.getElementById('firstName').value.trim(); // Get first name and remove whitespace
    const lastName = document.getElementById('lastName').value.trim(); // Get last name and remove whitespace
    const email = document.getElementById('email').value.trim();  // Get email and remove whitespace
    const message = document.getElementById('message').value.trim(); // Get message and remove whitespace

    // Regular expressions to validate name (only letters) and email (valid format)
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // String to hold error messages
    let isValid = true;
    let errorMessage = '';

    // Validate first name
    if (!namePattern.test(firstName)) {
        isValid = false;    // Mark form as invalid
        errorMessage += 'First name must contain only letters.\n'; // Add error message
    }

    // Validate last name
    if (!namePattern.test(lastName)) {
        isValid = false; // Mark form as invalid
        errorMessage += 'Last name must contain only letters.\n'; // Add error message
    }

    // Validate email
    if (!emailPattern.test(email)) {
        isValid = false; // Mark form as invalid
        errorMessage += 'Please enter a valid email address.\n'; // Add error message
    }

    // Validate message
    if (message.length < 10) {
        isValid = false;  // Mark form as invalid
        errorMessage += 'Message must be at least 10 characters long.\n'; // Add error message
    }

    //Submit form if validation pass, and reset form
    if (isValid) {
        alert('We will contact you as soon as possible, thank you!'); // Show a success message
        event.target.reset(); // Reset the form fields
    } else {
        alert(errorMessage); // Display accumulated error messages
    }
});