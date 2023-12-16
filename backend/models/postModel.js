/*
Post model for blog posts
*/

const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define Post schema
const postSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    datePosted: { type: Date, default: Date.now },
    tags: [String],
});

// Create the model and export
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
