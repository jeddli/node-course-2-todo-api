const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,        
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{VALUE} is not a valid email`
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens:[{
        access:{
            type: String,
            required: true
        },
        token:{
            type: String,
            required: true
        }
    }]
});


UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();
    console.log( 'User object', userObject );
    var test =  _.pick(userObject, ['_id', 'email']);
    
    return test;
};

// can't use arrow functio, because you should use this..
UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign( {_id: user._id.toHexString(), access}, 'abc123' ).toString();

    user.tokens.push( {access, token});

    // return other promise
    return user.save().then( () => {        
        return token;
    });    
};

var User = mongoose.model('Users', UserSchema );

module.exports = {User}