document.getElementById('volunteerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Validate form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const countryCode = document.getElementById('countryCode').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const city = document.getElementById('city').value.trim();
    const sourceOfJoining = document.getElementById('sourceOfJoining').value.trim();

    if (!firstName || !lastName || !email || !countryCode || !phoneNumber || !city || !sourceOfJoining) {
        alert('Please fill in all required fields.');
        return;
    }

    // Add more validation as needed

    // Submit the form
    alert('Form submitted successfully!');
    this.submit();
});
