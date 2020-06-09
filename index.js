process.env.UV_THEADPOOL_SIZE = 1;

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const cluster = require("cluster");
const crypto = require("crypto");

// Init
const app = express();
app.use(cors());

// Is the file being executed in master mode?
if (cluster.isMaster) {
  // Cause index.js to be executed *again* but in child mode
  cluster.fork();
  cluster.fork();
} else {
  // Iam a child, im going to act like a server and do nothing else

  app.get("/", (req, res) => {
    crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
      res.send("Hi there");
    });
  });

  app.get("/fast", (req, res) => {
    res.send("this is fast page");
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
}
