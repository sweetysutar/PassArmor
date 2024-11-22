document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Perform validation and registration logic here
    // For simplicity, let's assume a hardcoded registration process
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Store the registered user's information (You may use localStorage, a database, etc.)
    // For simplicity, let's just display the username and password in an alert
    alert(`Registration successful!\nUsername: ${username}\nPassword: ${password}`);

});
