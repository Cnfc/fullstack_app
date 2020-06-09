const express = require("express");
const path = require("path");
const passport = require("passport");
// const keys = require("./config/keys");
const GoogleStrategy = require("passport-google-oauth20");

// require("./models/User");
// require("./models/Blog");
// require("./services/passport");

// mongoose.Promise = global.Promise;
// mongoose.connect(keys.mongoURI, { useMongoClient: true });

// Init
const app = express();

// app.use(bodyParser.json());
// app.use(
//   cookieSession({
//     maxAge: 30 * 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new GoogleStrategy());

// require("./routes/authRoutes")(app);
// require("./routes/blogRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// if (["production"].includes(process.env.NODE_ENV)) {
//   app.use(express.static("client/build"));

//   const path = require("path");
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve("client", "build", "index.html"));
//   });
// }

// Heroku or Port

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
