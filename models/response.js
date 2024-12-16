const mongoose = require('mongoose');

// Define the schema for storing responses
const responseSchema = new mongoose.Schema(
    {
        prompt: {
            type: String,
            required: [true, 'Prompt is required'],
            trim: true,
        },
        response: {
            type: String,
            required: [true, 'Response is required'],
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Response', responseSchema);