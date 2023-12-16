/*
Project model for project showcase
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define Project schema
const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: [String],
    imageUrl: String,
    projectLink: String,
    dateCreated: { type: Date, default: Date.now },

});

// Create the model and export
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
