const db = require('../config/connection');
const cleanDB = require('./cleanDB')
const { UnfinishedStory , CompletedStory, User } = require('../models');

const storyData = require('./storySeeds.json');
const userData = require('./userSeeds.json');

db.once('open', async () => {
    await cleanDB('UnfinishedStory', 'unfinishedStories');
    await cleanDB('CompletedStory', 'completedStories');
    await cleanDB('User', 'users');

    await User.create(userData);

    await UnfinishedStory.create(storyData);

    console.log("DB Seeded!");
    process.exit(0);
})

