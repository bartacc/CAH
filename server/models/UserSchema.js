const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    'username': {type: String, unique: true, required: [true, 'Username is required'], validate: {
        validator: function(username) {
            return username.length > 5;
        },
        message: (props) => `${props.value} is too short!`,
    }},
    'password': String,
    'salt': String,
    'played': Number,
    'won': Number,
});

UserSchema.methods.validatePassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.getProfileData = function() {
    return {
        'username': this.username,
        'played': this.played,
        'won': this.won,
    };
};

module.exports = mongoose.model('User', UserSchema, 'users');
