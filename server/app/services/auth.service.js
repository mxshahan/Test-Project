import passport from 'passport';
import LocalStrategy from 'passport-local';

import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'
//import constants from '../config/constants'
import User from '../modules/User/user.model';

//Local Strategy
const localOpts = { usernameField: 'email' }
const localStrategy = new LocalStrategy(localOpts, async(email, password, done) => {
    try {
        const user = await User.findOne({ email })
        if (!user) {
            return done(null, false);
        } else if (!user.authenticateUser) {
            return done(null, false)
        }
        return done(null, user)
    } catch (error) {
        return done(e, false)

    }
})

//JWT Strategy
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromHeader('auth'),
    secretOrKey: 'siusiusiu'
}
const jwtStrategy = new JWTStrategy(jwtOpts, async(payload, done) => {
    try {
        const user = await User.findById(payload._id)
        if (!user) {
            return done(null, false)
        }
        return done(null, user)
    } catch (e) {
        return done(e, false)
    }
})

passport.use(jwtStrategy)
passport.use(localStrategy)

export const authJWT = passport.authenticate('jwt', { session: false })
export const authLocal = passport.authenticate('local', { session: false })