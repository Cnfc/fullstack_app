const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); 
const passport = require('passport');
const keys = require('./config/keys');
require('./modules/User');
require('./service/passport');

const authRoutes = require('./routes/authRoutes');

// Connecting DB
mongoose.connect(keys.mongoURL);

// Init
const app = express();

app.use(cookieSession({
    // How long cookies will be exist
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] 
  })
);

app.use(passport.initialize());
app.use(passport.session());


// Routes
authRoutes(app);



const PORT = process.env.PORT || 5000
app.listen(PORT);