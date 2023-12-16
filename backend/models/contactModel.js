/*
Contact model for contact form to contact owner
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define Contact schema
const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    dateSent: { type: Date, default: Date.now },
});

// Create the model and export
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
