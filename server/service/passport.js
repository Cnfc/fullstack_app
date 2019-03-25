const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  }, 
  (accessToken, refreshToken, profile, done) => {
    // Detect the SAME id
    User.findOne({googleId: profile.id})
    .then((existingUser) => {
      if(existingUser) {
        // We already have a record profile ID
      } else {
        // We don`t have profile ID
        new User({ googleId: profile.id }).save();
      }
    })

    
  }
  )
);