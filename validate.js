document.getElementById("registrationForm").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;

  // Name validation
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    event.preventDefault();
    return;
  }

  // Email format validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Password validation
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    event.preventDefault();
    return;
  }

  // Age validation
  if (age < 16 || age > 60) {
    alert("Age must be between 16 and 60.");
    event.preventDefault();
    return;
  }

  // Course selection
  if (course === "") {
    alert("Please select a course.");
    event.preventDefault();
    return;
  }
});