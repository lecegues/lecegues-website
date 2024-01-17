// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// Initialize modules modules
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Setting up nodemailer */

// 1. Transporter Object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

// 2. MailOptions object

// 3. Transporter.sendMail

// Global vars
const port = process.env.PORT || 8080;

// Connect to MongoDB Database
mongoose
  .connect("mongodb://localhost:27017/Website", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
