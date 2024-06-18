// const mongoose = require('mongoose');
// // const { Category, Product } = require('./models');
// const Business = require('../models/business.model');
// const Meeting = require('../models/meeting.model');
// const Service = require('../models/services.model');
// const User = require('../models/user.model');




// mongoose.connect('mongodb://localhost:27017/business', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB successfully');
// });

// module.exports = { mongoose, Business, Meeting, Service, User };

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/business', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB successfully');
});

module.exports = mongoose;



