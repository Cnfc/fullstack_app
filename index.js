const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");

// Init
const app = express();
app.use(cors());

app.get("/co", function (req, res) {
  return res.send(`
    <h1>Form</h1>
    <form method='post' action='/' >
      <input name='title' type='text' />
      <button type='submit'>Send</button>
    </form>
  `);
});

app.get("/about", function (req, res) {
  res.send("about");
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// Heroku or Port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
