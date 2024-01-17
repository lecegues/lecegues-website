// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

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

// 2. send
async function main() {
  const info = await transporter.sendMail({
    from: '"John Lecegues" <lecegues.programmer@gmail.com>',
    to: "johnlecegues@gmail.com",
    subject: "Nice to meet you!",
    text: "I have received your email, and will get back to you shortly!",
  });

  console.log("Message sent: %s", info.messageId);
}

// to send mail: main().catch(console.error);

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
