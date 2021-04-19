const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const User = new Schema({
    user_name: String,
    pass_word: String,
    role: Number,
    email: String
});

module.exports = User;