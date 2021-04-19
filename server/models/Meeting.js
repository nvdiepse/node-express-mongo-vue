const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Meeting = new Schema({
    meeting_number: Number,
    pass_word: String
});

module.exports = Meeting;