const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

// Init
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

console.log("Hello", __filename);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// Heroku or Port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
