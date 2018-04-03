'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongooseUniqueValidator = require('mongoose-unique-validator');

var _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CourseSchema = new _mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is Required!!'],
        unique: true
    },
    catagory: {
        type: String,
        trim: true,
        required: [true, 'Text is required!']
    },
    price: {
        type: Number
    },
    media: {
        link: [{
            type: String
        }]
    },
    trainer: {
        type: _mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    purchase: {
        student: [{
            type: _mongoose.Schema.Types.ObjectId,
            ref: "user"
        }]
    }
}, {
    //automaticly add created and updated 
    timestamps: true
});

CourseSchema.methods = {
    toJSON: function toJSON() {
        return {
            _id: this._id,
            title: this.title,
            price: this.price,
            createdAt: this.createdAt,
            media: this.media,
            CourseOwner: this.trainer
        };
    }
};

// PostSchema.statics = {
//     createPost(args, user) {
//         return this.create({
//             ...args,
//             user,
//         });
//     },
//     list({ skip = 0, limit = 2 } = {}) {
//         return this.find()
//             .sort({ createdAt: -1 })
//             .skip(skip)
//             .limit(limit)
//             .populate('user')
//     }
// };

exports.default = _mongoose2.default.model('course', CourseSchema);