const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
  // user.id from mongo id 
}); 

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
})

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "https://mighty-ocean-47050.herokuapp.com/auth/google/callback",
    proxy: true
  }, 
  (accessToken, refreshToken, profile, done) => {
    // Detect the SAME id
    User.findOne({googleId: profile.id}).then((existingUser) => {
      if(existingUser) {
        // We already have a record profile ID
        done(null, existingUser);
      } else {
        // We don`t have profile ID
        new User({ googleId: profile.id })
        .save()
        .then(user => done(null, user));
      }
    });   
  }
  )
);