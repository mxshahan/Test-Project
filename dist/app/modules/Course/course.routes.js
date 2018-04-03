'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _course = require('./course.controller');

var courseController = _interopRequireWildcard(_course);

var _auth = require('../../services/auth.service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var routes = new _express.Router();
routes.get('/getCourse/:id', courseController.GetSingleCourse);
routes.get('/getAllCourse', courseController.GetAllCourse);
routes.post('/charge', courseController.stripeCharge);
exports.default = routes;