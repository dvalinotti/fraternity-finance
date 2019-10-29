const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 32,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        maxlength: 255,
        required: true,
        trim: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 255,
        required: true
    }
});

UsersSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        password: this.password
    }, config.get('privateKey')); //get the private key from the config file -> environment variable
    return token;
}

//function to validate user 
function validateUser(user, auth) {
    if (auth) {
        const schema = {
            username: Joi.string().min(3).max(50).required(),
            email: Joi.string().min(5).max(255).required().email(),
            password: Joi.string().min(3).max(255).required()
        };
        // console.log(schema);
        // console.log("USER: ", user);
    
        return Joi.validate(user, schema);
    } else {
        return Joi.invalid();
    }
}

var Users = mongoose.model('users', UsersSchema);

module.exports = {
    User: Users,
    validate: validateUser
};