require('dotenv').config();
const express = require('express');
const connectToDB = require('./mongoDB/db');
const responseRoutes = require('./routes/responseRoutes');
const cors= require('cors')


const app = express();

// Middleware
app.use(express.json());


// Connect to MongoDB database
connectToDB();

const corsOptions = {
    origin:true,
    optionsSuccessStatus: 200,
    credentials:true
}
app.use(cors(corsOptions))

// Basic route
app.get('/', (req, res) => {
    res.send("Recipe! Gemini...");
});

// API routes
app.use('/api', responseRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});