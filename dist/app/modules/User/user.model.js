'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator2 = require('validator');

var _validator3 = _interopRequireDefault(_validator2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _bcryptNodejs = require('bcrypt-nodejs');

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

var UserSchema = new _mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: [true, 'Email is Required!'],
        trim: true,
        validate: {
            validator: function validator(email) {
                return _validator3.default.isEmail(email);
            },

            message: '{VALUE} is not a valid Email!'
        }
    },
    firstName: {
        type: String,
        required: [true, 'FirstName is required'],
        trim: true
    },
    student: {
        purchase: [{
            type: _mongoose.Schema.Types.ObjectId,
            ref: 'course'
        }]
    },
    trainer: {
        courses: [{
            type: _mongoose.Schema.Types.ObjectId,
            ref: 'course'
        }]
    },
    lastName: {
        type: String,
        required: [true, 'LastName is required'],
        trim: true
    },
    userName: {
        type: String,
        required: [true, 'UserName is required'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        trim: true,
        minlength: [6, 'Password need to be longer than 6!']
    },
    accountType: {
        type: String,
        required: [true, 'Account type is Required'],
        trim: true
    }
}, {
    timestamps: true
});

UserSchema.plugin(_mongooseUniqueValidator2.default, {
    message: '{VALUE}already taken!'
});

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
});

UserSchema.methods = {
    _hashPassword: function _hashPassword(password) {
        return (0, _bcryptNodejs.hashSync)(password);
    },
    authenticateUser: function authenticateUser(password) {
        return (0, _bcryptNodejs.compareSync)(password, this.password);
    },
    createToken: function createToken() {
        return _jsonwebtoken2.default.sign({
            _id: this._id
        }, 'siusiusiu');
    },
    toAuthJSON: function toAuthJSON() {
        return {
            _id: this._id,
            accountType: this.accountType,
            token: '' + this.createToken()
        };
    }
};

exports.default = _mongoose2.default.model('user', UserSchema);