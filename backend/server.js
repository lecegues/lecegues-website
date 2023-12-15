const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
