import User from '../User/user.model'
import Course from '../Course/course.model';
const stripe = require('stripe')('sk_test_uE7kll2IiWs07ipIHaCBdKUa');


export async function GetAllCourse(req, res) {
    try {
   
       const course = await Course.find({})
       return res.status(201).json(course);
    } catch (e) {
        return res.status(500).json(e)
    }
}

export async function GetSingleCourse(req, res) {
    const courseID = req.params.id;
    try{
        const course = await Course.findById(courseID);
        course.purchase.student.push(courseID)
        // console.log(course)
        
        return res.status(201).json(course);
    }catch(e){
        return res.status(500).json('Error', e)
    }
}

export async function stripeCharge(req, res){
    // console.log(req.body.token)
    const amount = req.body.amount;
    const description = req.body.description;

	console.log(req.body.token.email, req.body.token.id)
        
    stripe.customers.create({
        email: req.body.token.email,
        source: req.body.token.id
    })
    .then((customer) => stripe.charges.create({
        amount,
        description: 'Web Development Tools',
        currency: 'usd',
        customer: customer.id
    }))
    .then( (charge) => res.render('success'));
}


export async function GetUserCourse (req, res){
    const userID = req.params.id;
    try{
        const course = await Course.find({trainer: userID});
        console.log(course)
        
        return res.status(201).json(course);
    }catch(e){
        return res.status(500).json('Error', e)
    }
}