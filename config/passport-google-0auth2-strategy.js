const passport = require('passport');
const crypto = require('crypto');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');


// tell passport the use Google Oauth Strategy

passport.use(new googleStrategy({
    clientID:"752317785339-puqihne5m6g48cjprcuk9gptjqmnt86b.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:8000/users/auth/google/callback",
  },
  function(accessToken,refreshToken,profile,done){
    // Find A User
        User.findOne({email:profile.emails[0].value}).exec(function(err,user){
            if(err){
                console.log('Error in finding user in GooGle Oauth Strategy',err);return;}
                console.log('Profile',profile);
            // If User
            if (user) {
                // if found,set this user as req.user
                return done(null, user);
            } else {
                
                // if not found ,create this user as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex')
                },
                    function (err, user) {
                        if (err) {
                            console.log('Error in finding user in GooGle Oauth Strategy', err); return;
                        }

                        return done(null,user);
                    });

            }
                
        });
       

  }
));






module.exports = passport