// Import required modules
const express = require('express');
const mongoose = require('mongoose');

// Initialize modules modules
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Global vars
const port = process.env.PORT || 8080;

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
