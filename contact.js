// Add an event listener to the form 
document.getElementById('contacForm').addEventListener('submit', (event) =>  formValidation(event)) // get element by id from HTML. and attaches submit event on the form

function formValidation(event) {
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
    let validation = true;
    let errorAlert = '';

    // Validate first name
    if (!namePattern.test(firstName)) { // checks if the firstName maches regular pattern (!) 
        validation = false;    // Mark form as invalid
        errorAlert += 'The First name must contain only letters.\n'; // Add error message, add new line
    }

    // Validate last name
    if (!namePattern.test(lastName)) { // checks if the lastName maches regular pattern (!) 
        validation = false; // Mark form as invalid
        errorAlert += 'The Last name must contain only letters.\n'; // Add error message, add new line
    }

    // Validate email
    if (!emailPattern.test(email)) { // checks if the email maches regular pattern (!) 
        validation = false; // Mark form as invalid
        errorAlert += 'Please enter a valid email address.\n'; // Add error message, add new line
    }

    // Validate message
    if (message.length < 10) { // checks if length is less than 10
        validation = false;  // Mark form as invalid
        errorAlert += 'Message must be at least 10 characters long.\n'; // Append/Add error message, add new line
    }

    //Submit form if validation pass, and reset form
    if (validation) {
        alert('We will contact you as soon as possible, thank you!'); // Show a success message
        event.target.reset(); // Reset the form fields
    } else {
        alert(errorAlert); // Display accumulated error messages
    }
}