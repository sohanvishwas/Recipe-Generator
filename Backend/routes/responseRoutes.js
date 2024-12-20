const express = require('express');

const {
    createResponse,
    getResponses,
    getResponseById,
    updateResponse,
    deleteResponse
} = require('../controllers/responseController');

const router = express.Router();

// CREATE: Generate and save content
router.post('/create/content', createResponse);

// READ: Fetch all responses or a single response
router.get('/find/all/content', getResponses);
router.get('/find/content/:id', getResponseById);

// UPDATE: Update response by ID
router.put('/update/content/:id', updateResponse);

// DELETE: Delete response by ID
router.delete('/delete/content/:id', deleteResponse);

module.exports = router;
