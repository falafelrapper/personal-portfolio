const { Schema, model } = require('mongoose');

const completedStorySchema = new Schema({
    title: String,
    finishedText: String,
    userId: String
});

const CompletedStory = model('CompletedStory', completedStorySchema, "completedStories");

module.exports = CompletedStory;