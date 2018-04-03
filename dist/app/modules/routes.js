'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _user = require('./User/user.routes');

var _user2 = _interopRequireDefault(_user);

var _course = require('./Course/course.routes');

var _course2 = _interopRequireDefault(_course);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.use('/api/user', _user2.default);
    app.use('/api/course', _course2.default);
};