const mongoose = require('mongoose');

const SessionsSchema = new mongoose.Schema({
    token: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: false
    },
    username: {
      type: String,
      unique: true,
      required: true,
      minlength: 3,
      maxlength: 32,
      trim: true
    },
    timestamp: {
      type: Date,
      required: true
    }
});

var Sessions = mongoose.model('sessions', SessionsSchema);

module.exports = {
    Session: Sessions
};