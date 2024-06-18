const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: String,
    id: Number,
    email:String,
    password:String,
    role:String,
});

const UserModel = mongoose.models.User || model('User', userSchema);

module.exports = UserModel;
