const { User, CompletedStory, UnfinishedStory } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

// Queries for all combinations of users, unfinished stories, and completed stories
// Not all of these are accessible by users and were used in development or are future work

// Mutations for signing up, loggin in, and creating a completed story
// Note that there is nothing to add an unfinished story, those are seeded
// Completeing a story requires the user to be logged in and will add it to thier profile when completed
const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('stories');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('stories');
        },
        unfinishedStory: async (parent, { storyId }) => {
            return UnfinishedStory.findOne({ _id: storyId });
        },
        unfinishedStories: async () => {
            return UnfinishedStory.find();
        },
        completedStory: async (parent, { storyId }) => {
            return CompletedStory.findOne({ _id: storyId });
        },
        completedStories: async () => {
            return CompletedStory.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('stories');
            }
            throw AuthenticationError;
        },
    },
    Mutation: {
        addUser: async (parent, { username, password }) => {
            const user = await User.create({ username, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw AuthenticationError;
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError;
            }

            const token = signToken(user);

            return { token, user };
        },
        createStory: async (parent, { title, finishedText }, context) => {
            if (context.user) {
                const completedStory = await CompletedStory.create({
                    title,
                    finishedText,
                    userId: context.user._id,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { stories: completedStory._id } }
                );

                return completedStory
            }
            throw AuthenticationError;
        },
        deleteStory: async (parent, { storyId }, context) => {
            if (context.user) {
                await CompletedStory.findOneAndDelete({ _id: storyId });

                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { stories: { storyId } } },
                    { new: true }
                );


                return updatedUser;
            }

            throw AuthenticationError;
        },
    },
};

module.exports = resolvers;