const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
        message: '{value} is not a valid email'
      }
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        require: true
      }
    }]
  });

  UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject(); //takes mongoose obj (user) and converts to regular object

    return _.pick(userObject, ['_id', 'name', 'email']);
  };

  UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

    user.tokens.push({access, token});

    return user.save().then(() => {
      return token;
    });
  };
//Statics is for model methods, instead of instance methods
  UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;

    try {
      decoded = jwt.verify(token, 'abc123');
    } catch (e) {
      return Promise.reject();
    }

    return User.findOne({
      '_id': decoded._id,
      'tokens.token': token,
      'tokens.access': 'auth',
    });
  };

  UserSchema.pre('save', function (next) {
    var user = this;

    if(user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        next();
        })
      });
      // bcrypt.compare(user.password, hashedPassword, (err, res) => {
      //   console.log(res);
    } else {
      next();
    }
    });

var User = mongoose.model('User', UserSchema);

module.exports = {User};
