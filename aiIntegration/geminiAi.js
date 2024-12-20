// Import the Google Generative AI
const { GoogleGenerativeAI } = require("@google/generative-ai");
const response = require("../models/response");

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Generate recipe using the AI
const generateContent = async (prompt) => {
    try {
        
        const result = await model.generateContent(prompt);
        // let res = result.response.text()
        return result.response.text();
        // return {"Recipe": res}
    } catch (err) {
        console.error(err);
        throw new Error("Content generation failed.");
    }
};

// Export the generateContent function
module.exports = { generateContent };