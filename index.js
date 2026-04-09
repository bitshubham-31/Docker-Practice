const express = require("express");
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send("Hello World from Node.js!");
});

// About route
app.get('/about', (req, res) => {
  res.send("This is a simple Node.js app");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});