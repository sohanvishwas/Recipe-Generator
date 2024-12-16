const Response = require('../models/response');
const {generateContent} = require('../aiIntegration/geminiAi')

// 1. CREATE: Generate recipe from AI and save to MongoDB database
exports.createResponse = async (req, res) => {
    try {
        const question = req.body;

        if (!question) {
            return res.status(400).json({ error: "Question is required in the request body." });
        }

        const generatedResponse = await generateContent(question);

        const savedResponse = await Response.create({
            prompt: question,
            response: generatedResponse,
        });

        res.status(201).json(savedResponse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 2. READ: Fetch all responses or a single response by ID
exports.getResponses = async (req, res) => {
    try {
        const responses = await Response.find();
        res.status(200).json(responses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getResponseById = async (req, res) => {
    try {
        const id = req.params;
        const response = await Response.findById(id);

        if (!response) {
            return res.status(404).json({ error: "Response not found." });
        }

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. UPDATE: Update saved response by ID
exports.updateResponse = async (req, res) => {
    try {
        const id = req.params;
        const { prompt, response } = req.body;

        const updatedResponse = await Response.findByIdAndUpdate(
            id,
            { prompt, response },
            { new: true, runValidators: true }
        );

        if (!updatedResponse) {
            return res.status(404).json({ error: "Response not found." });
        }

        res.status(200).json(updatedResponse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 4. DELETE: Delete a response by ID
exports.deleteResponse = async (req, res) => {
    try {
        const id = req.params;

        const deletedResponse = await Response.findByIdAndDelete(id);

        if (!deletedResponse) {
            return res.status(404).json({ error: "Response not found." });
        }

        res.status(200).json({ message: "Response deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};