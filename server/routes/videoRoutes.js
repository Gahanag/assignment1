const express = require('express');
const router = express.Router();
const videoController = require('./controllers/videoController');

// Route to analyze a video
router.post('/analyze', videoController.analyzeVideo);

module.exports = router;
