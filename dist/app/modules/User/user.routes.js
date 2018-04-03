'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _user = require('./user.controller');

var userController = _interopRequireWildcard(_user);

var _auth = require('../../services/auth.service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = new _express.Router();
// import userValidation from './user.validation';
// import validate from 'express-validation';

routes.get('aa', function (req, res) {
    res.json({ msg: 'Hi' });
});

routes.options((0, _cors2.default)());
routes.post('/signup', userController.signUp);
routes.post('/login', _auth.authLocal, userController.login);
routes.get('/me', _auth.authJWT, userController.getUserData);
routes.post('/trainer/addcourse', _auth.authJWT, userController.AddNewCourse);
routes.get('/trainer/courses', _auth.authJWT, userController.GetTrainerCourse);

exports.default = routes;