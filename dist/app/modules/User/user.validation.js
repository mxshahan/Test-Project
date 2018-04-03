'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.passwordReg = undefined;

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var passwordReg = exports.passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

exports.default = {
    signup: {
        body: {
            email: _joi2.default.string().email().required(),
            password: _joi2.default.string().regex(passwordReg).required(),
            firstName: _joi2.default.string().required(),
            lastName: _joi2.default.string().required(),
            userName: _joi2.default.string().required(),
            accountType: _joi2.default.string().required()
        }
    },
    signin: {
        body: {
            email: _joi2.default.string().email().required(),
            password: _joi2.default.string().regex(passwordReg).required()

        }
    }
};