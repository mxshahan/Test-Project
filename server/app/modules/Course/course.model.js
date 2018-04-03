import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
const CourseSchema = new Schema({
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
    price :{
        type:Number
    },
    media :{
        link:[{
            type:String
        }]
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    purchase :{
        student :[{
            type:Schema.Types.ObjectId,
            ref:"user"
        }] 
    }
}, {
    //automaticly add created and updated 
    timestamps: true
})



CourseSchema.methods = {
    toJSON() {
        return {
            _id: this._id,
            title: this.title,
            price: this.price,
            createdAt: this.createdAt,
            media:this.media,
            CourseOwner: this.trainer,
        }
    }
}

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

export default mongoose.model('course', CourseSchema)