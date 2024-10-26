const validUsername = "user";
const validPassword = "password";
document.getElementById('loginForm').addEventListener('submit',
function(event) {
event.preventDefault(); // Prevent default form submission
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
// Simulate authentication
if (username === validUsername && password === validPassword) {
document.getElementById('response').innerHTML = `<p class="alert alert-
success">Login successful! Welcome, ${username}!</p>`;
// Redirect to a new page or dashboard after successful login (optional)
// window.location.href = "dashboard.html"; // Use when a valid page is
created
} else {
document.getElementById('response').innerHTML = `<p class="alert alert-
danger">Invalid username or password!</p>`;
}
// Clear the form
this.reset();
});