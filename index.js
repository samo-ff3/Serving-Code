// Assuming tone.js is included in the HTML

// Ensure the DOM is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    // Get the login form
    const loginForm = document.getElementById('loginForm');
    
    // Add submit event listener
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Extract username and password
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Log them to the console
        console.log('Username:', username);
        console.log('Password:', password);
    });
});

tn.modalTs()
