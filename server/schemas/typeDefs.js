// typedefs for accessing the DB
// matches front end queries/models/resolvers

const typeDefs = `
  type User {
    _id: ID
    username: String
    password: String
    stories: [CompletedStory]
  }

  type UnfinishedStory {
    _id: ID
    title: String
    unfinishedText: String
    blanks: [Blank]
  }

  type CompletedStory {
    _id: ID
    title: String
    finishedText: String
    userId: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Blank {
    _id: ID!
    blankType: String
  }

  type Query {
    user(username: String!): User
    users: [User]
    unfinishedStory(storyId: ID!): UnfinishedStory
    unfinishedStories: [UnfinishedStory]
    completedStory(storyId: ID!): CompletedStory
    completedStories: [CompletedStory]
    me: User
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createStory(title: String!, finishedText: String!): CompletedStory
    deleteStory(storyId: ID!): User
  }
`;

module.exports = typeDefs;
