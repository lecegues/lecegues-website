// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

// Initialize modules
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

/* Initial setup for nodemailer */

// Transporter Object needed for nodemailer
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

/**
 * Sends initial email from User contact form to Owner
 * @param {string} userEmail - email from the user that sent the message
 * @param {string} userSubject - subject from the user that sent the message
 * @param {string} userMessage - user's message
 */
async function receiveEmail(userEmail, userSubject, userMessage) {
  const info = await transporter.sendMail({
    from: `"John Lecegues" <${process.env.AUTOMATED_EMAIL}>`,
    to: process.env.PERSONAL_EMAIL,
    subject: `lecegues.com Contact Form - ${userSubject}`,
    html: `<b>From:</b> ${userEmail}<br>${userMessage}`,
  });

  console.log("Message sent: %s", info.messageId);
}

/**
 * Sends an automated response email back to sender to confirm that I have received the email
 * @param {*} userEmail
 */
async function sendConfirmationEmail(userEmail) {
  const info = await transporter.sendMail({
    from: `"John Lecegues" <${process.env.AUTOMATED_EMAIL}>`,
    to: userEmail,
    subject: "Nice to meet you!",
    html: "Hey there, <br> this is John Lecegues, and this is an automated response to let you know that I've received your email!<br>Once I've read your email, I will get back to you shortly.",
  });

  console.log("Message sent: %s", info.messageId);
}

/**
 * POST /send-contact-form
 * Processes a contact form submissions
 *
 * Request Body:
 *  - email (string): sender's email address
 *  - subject (string): email subject
 *  - message (string): email message content
 *
 * Responses:
 *  200: Success - Email sent succesfully
 *  500: Server Error - Server could not send email
 *
 */
app.post("/send-contact-form", (req, res) => {
  const { email, subject, message } = req.body;

  receiveEmail(email, subject, message)
    .then(() => {
      // If succesful, then send the confirmation email
      sendConfirmationEmail(email);
    })
    .then(() => {
      // if confirmation email sent, then send success response back
      res.status(200).send({ message: "Emails sent succesfully" });
    })
    .catch((error) => {
      // handle any errors
      console.error(error);
      res.status(500).send({ message: "Error sending the email" });
    });
});

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
