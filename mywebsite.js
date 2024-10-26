document.getElementById('contactForm').addEventListener('submit',
    function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // Process form data here (e.g., send to server or display confirmation)
    document.getElementById('successMessage').style.display = 'block';
    this.reset(); // Clear the form inputs
    });