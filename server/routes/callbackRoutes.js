const express = require('express');
const router = express.Router();
const callbackController = require('./controllers/callbackController');

// Route to submit a callback request
router.post('/submit', callbackController.submitCallbackRequest);

module.exports = router;
