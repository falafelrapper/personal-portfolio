const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/madlibsDB');
//mongoose.connect('mongodb+srv://esstone27:AtlasPassword@cluster1.4cz28yc.mongodb.net/madlibsDB?retryWrites=true&w=majority&appName=Cluster1');

module.exports = mongoose.connection;
