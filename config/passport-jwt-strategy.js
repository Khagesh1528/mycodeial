const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');



let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'codeial'
}

// Use the Passport Strategy And Find the User

passport.use(new JWTStrategy(opts, function (jwt_payload, done) {

    User.findById(jwt_payload._id, function (err, user) {
        if (err) {
            console.log('Error in finding User From :: JWT');
            return ;
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

module.exports = passport;