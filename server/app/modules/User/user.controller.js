import User from '../User/user.model'
import Course from '../Course/course.model'


export const signUp = async (req, res) =>{
    try {
     //   res.json({msg: 'Hi'})
        const user = await User.create(req.body);
        return res.status(201).json(user.toAuthJSON())
    } catch (e) {
        return res.status(500).json(e)
    }
}
export const login = async (req, res, next) => {
    res.status(200).json(req.user.toAuthJSON());
    return next();
}

export const getUserData = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id).populate('course', '-password')
        // console.log(user)
        
        res.status(200).json(user);
       } catch (e) {
           return res.status(500).json(e)
       }
}

export const AddNewCourse = async (req, res, next) => {
    try {
             //res.json({msg: 'Hi'})
        const user =await  User.findById(req.user._id)
        
        const data = req.body;
        data.trainer = user;
        // console.log(data)
        const course = new Course(data)

        await course.save()
        // console.log(' Course ',course);
        

        user.trainer.courses.push(course);
        // console.log('User', user)

        await user.save()
        res.status(200).json(course);
       } catch (e) {
           return res.status(500).json(e)
       }
}

export const GetTrainerCourse = async (req, res, next) => {
    try {
        const course = await Course.find({trainer:req.user._id})
        res.status(200).json(course);
       } catch (e) {
           return res.status(500).json(e)
       }
}