
        
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    // Example credentials
    const correctUsername = "admin";
    const correctPassword = "12345";

    if (username === correctUsername && password === correctPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password";
    }
}