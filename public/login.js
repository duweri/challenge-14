// Handler function for chess login form submission
const LoginFormHandler = async (event) => {
    event.preventDefault();
    // Get the values of the username and password input fields
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
   
    if (username && password) {
          // Send a POST request to the login endpoint with the input values as JSON data
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      // If the request was successful, redirect to the homepage
      if (response.ok) {
        document.location.replace('/'); // When successful, load the homepage
      } else {
              
        alert('Failed to log in.'); 
      }
    }
  };
  
  // Event listener for the chess login form
  const LoginForm = document.querySelector('.login-form');
  if (LoginForm) {
    LoginForm.addEventListener('submit', LoginFormHandler);
  }