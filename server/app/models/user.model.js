import mongoose, { Schema } from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import config from 'config';

const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

const userSchema = new Schema({
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


// userSchema.pre('save', function(next) {
//     if (this.isModified('password')) {
//         this.password = this._hashPassword(this.password);
//         return next();
//     }
//     return next();
// });

// userSchema.methods = {
//     createToken() {
//         return jwt.sign({
//             _id: this._id
//         }, 'siusiusiu')

        
//     },
//     toAuthJSON() {
//         return {
//             _id: this._id,
//             token: `JWT ${this.createToken()}`
//         }
//         console.log('sdsdsd')
//     },
// }



userSchema.methods = {
    // _hashPassword(password) {
    //     return hashSync(password);
    // },
    // authenticateUser(password) {
    //     return compareSync(password, this.password);
    // },
    createToken() {
        return jwt.sign({
            _id: this._id
        }, 'siusiusiu')
    },
    toAuthJSON() {
        return {
            _id: this._id,
            userName: this.userName,
            token: `JWT ${this.createToken()}`,
        }
    },
}



export default mongoose.model('User', userSchema)
