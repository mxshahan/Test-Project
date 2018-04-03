'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authLocal = exports.authJWT = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportLocal2 = _interopRequireDefault(_passportLocal);

var _passportJwt = require('passport-jwt');

var _user = require('../modules/User/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Local Strategy
var localOpts = { usernameField: 'email' };
//import constants from '../config/constants'

var localStrategy = new _passportLocal2.default(localOpts, async function (email, password, done) {
    try {
        var user = await _user2.default.findOne({ email: email });
        if (!user) {
            return done(null, false);
        } else if (!user.authenticateUser) {
            return done(null, false);
        }
        return done(null, user);
    } catch (error) {
        return done(e, false);
    }
});

//JWT Strategy
var jwtOpts = {
    jwtFromRequest: _passportJwt.ExtractJwt.fromHeader('auth'),
    secretOrKey: 'siusiusiu'
};
var jwtStrategy = new _passportJwt.Strategy(jwtOpts, async function (payload, done) {
    try {
        var user = await _user2.default.findById(payload._id);
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    } catch (e) {
        return done(e, false);
    }
});

_passport2.default.use(jwtStrategy);
_passport2.default.use(localStrategy);

var authJWT = exports.authJWT = _passport2.default.authenticate('jwt', { session: false });
var authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });