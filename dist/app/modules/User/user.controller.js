'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetTrainerCourse = exports.AddNewCourse = exports.getUserData = exports.login = exports.signUp = undefined;

var _user = require('../User/user.model');

var _user2 = _interopRequireDefault(_user);

var _course = require('../Course/course.model');

var _course2 = _interopRequireDefault(_course);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUp = exports.signUp = async function signUp(req, res) {
    try {
        //   res.json({msg: 'Hi'})
        var user = await _user2.default.create(req.body);
        return res.status(201).json(user.toAuthJSON());
    } catch (e) {
        return res.status(500).json(e);
    }
};
var login = exports.login = async function login(req, res, next) {
    res.status(200).json(req.user.toAuthJSON());
    return next();
};

var getUserData = exports.getUserData = async function getUserData(req, res, next) {
    try {
        var user = await _user2.default.findById(req.user._id).populate('course', '-password');
        // console.log(user)

        res.status(200).json(user);
    } catch (e) {
        return res.status(500).json(e);
    }
};

var AddNewCourse = exports.AddNewCourse = async function AddNewCourse(req, res, next) {
    try {
        //res.json({msg: 'Hi'})
        var user = await _user2.default.findById(req.user._id);

        var data = req.body;
        data.trainer = user;
        // console.log(data)
        var course = new _course2.default(data);

        await course.save();
        // console.log(' Course ',course);


        user.trainer.courses.push(course);
        // console.log('User', user)

        await user.save();
        res.status(200).json(course);
    } catch (e) {
        return res.status(500).json(e);
    }
};

var GetTrainerCourse = exports.GetTrainerCourse = async function GetTrainerCourse(req, res, next) {
    try {
        var course = await _course2.default.find({ trainer: req.user._id });
        res.status(200).json(course);
    } catch (e) {
        return res.status(500).json(e);
    }
};