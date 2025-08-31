const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // for file upload

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname)); // serves index.html, validate.js

// File upload setup
const upload = multer({ dest: "uploads/" });

// Handle form submission
app.post("/submit", upload.single("photo"), (req, res) => {
  console.log("Form Data Received:");
  console.log("Name:", req.body.name);
  console.log("Email:", req.body.email);
  console.log("Password:", req.body.password);
  console.log("Age:", req.body.age);
  console.log("Gender:", req.body.gender);
  console.log("DOB:", req.body.dob);
  console.log("Course:", req.body.course);
  console.log("Hobbies:", req.body.hobbies);
  console.log("Rating:", req.body.rating);
  console.log("LinkedIn:", req.body.linkedin);
  console.log("Favorite Color:", req.body.favcolor);
  console.log("Uploaded File:", req.file);

  res.send(`
    <h2>Registration Successful!</h2>
    <p>Thank you, ${req.body.name}. Your details have been recorded.</p>
    <a href="/">Go Back</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});