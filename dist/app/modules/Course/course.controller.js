'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetAllCourse = GetAllCourse;
exports.GetSingleCourse = GetSingleCourse;
exports.stripeCharge = stripeCharge;
exports.GetUserCourse = GetUserCourse;

var _user = require('../User/user.model');

var _user2 = _interopRequireDefault(_user);

var _course = require('../Course/course.model');

var _course2 = _interopRequireDefault(_course);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stripe = require('stripe')('sk_test_uE7kll2IiWs07ipIHaCBdKUa');

async function GetAllCourse(req, res) {
    try {

        var course = await _course2.default.find({});
        return res.status(201).json(course);
    } catch (e) {
        return res.status(500).json(e);
    }
}

async function GetSingleCourse(req, res) {
    var courseID = req.params.id;
    try {
        var course = await _course2.default.findById(courseID);
        course.purchase.student.push(courseID);
        // console.log(course)

        return res.status(201).json(course);
    } catch (e) {
        return res.status(500).json('Error', e);
    }
}

async function stripeCharge(req, res) {
    // console.log(req.body.token)
    var amount = req.body.amount;
    var description = req.body.description;

    console.log(req.body.token.email, req.body.token.id);

    stripe.customers.create({
        email: req.body.token.email,
        source: req.body.token.id
    }).then(function (customer) {
        return stripe.charges.create({
            amount: amount,
            description: 'Web Development Tools',
            currency: 'usd',
            customer: customer.id
        });
    }).then(function (charge) {
        return res.render('success');
    });
}

async function GetUserCourse(req, res) {
    var userID = req.params.id;
    try {
        var course = await _course2.default.find({ trainer: userID });
        console.log(course);

        return res.status(201).json(course);
    } catch (e) {
        return res.status(500).json('Error', e);
    }
}