const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("Users");
passport.serializeUser((user, done) => {
  done(null, user.id);
  // user.id from mongo id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/callback",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName,
        }).save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }

      //   // Detect the SAME id
      //   const existingUser = await User.findOne({googleId: profile.id});

      //   if(existingUser) {
      //     // We already have a record profile ID
      //     return done(null, existingUser);
      //   }
      //   // We don`t have profile ID
      //   const user =  await new User({ googleId: profile.id }).save()
      //   done(null, user);
    }
  )
);
