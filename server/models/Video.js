const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoLink: String,
  subscriberCount: Number,
  likes: Number,
  comments: Number,
  views: Number,
  earnings: Number,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
