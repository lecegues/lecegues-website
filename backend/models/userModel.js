/*
User model for user authentication and management, especially for the admin dashboard
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define User schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },

});

// Create the model and export
const User = mongoose.model('User', userSchema);

module.exports = User;
