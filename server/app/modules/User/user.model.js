import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import config from 'config';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import uniqueValidator from 'mongoose-unique-validator'

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        require: [true, 'Email is Required!'],
        trim: true,
        validate: {
            validator(email){
                return validator.isEmail(email)
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
            type: Schema.Types.ObjectId,
            ref: 'course'
        }]
    },
    trainer: {
        courses: [{
            type: Schema.Types.ObjectId,
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

UserSchema.plugin(uniqueValidator, {
    message: '{VALUE}already taken!'
})

UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        this.password = this._hashPassword(this.password);
        return next();
    }
    return next();
})


UserSchema.methods = {
    _hashPassword(password) {
        return hashSync(password);
    },
    authenticateUser(password) {
        return compareSync(password, this.password);
    },
    createToken() {
        return jwt.sign({
            _id: this._id
        }, 'siusiusiu')
    },
    toAuthJSON() {
        return {
            _id: this._id,
            accountType:this.accountType,
            token: `${this.createToken()}`,
        }
    },
}



export default mongoose.model('user', UserSchema)
