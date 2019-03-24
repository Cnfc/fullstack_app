const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./modules/User');
require('./service/passport');

const authRoutes = require('./routes/authRoutes');

// Connecting DB
mongoose.connect(keys.mongoURL);

// Init
const app = express();

// Passport Google+


// Routes
authRoutes(app);



const PORT = process.env.PORT || 5000
app.listen(PORT);