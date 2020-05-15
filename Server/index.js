const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");

// const serObj = require("./user");
// console.log(serObj);

// Init
const app = express();

//здесь наше приложение отдаёт статику
// app.use(express.static(__dirname, "build"));

app.get("/ping", function (req, res) {
  return res.send("pong");
});

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Heroku or Port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
