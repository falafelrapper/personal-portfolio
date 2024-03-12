const { Schema, model } = require('mongoose');

const unfinishedStorySchema = new Schema({
    title: String,
    unfinishedText: String,
    blanks: [{
        blankType: String
    }]
});

const UnfinishedStory = model('UnfinishedStory', unfinishedStorySchema, "unfinishedStories");

module.exports = UnfinishedStory;