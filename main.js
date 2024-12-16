require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectToDB = require('./mongoDB/db');
const responseRoutes = require('./routes/responseRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Connect to MongoDB database
connectToDB();

// Basic route
app.get('/', (req, res) => {
    res.send("Recipe! Gemini...");
});

// API routes
app.use('/api', responseRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});