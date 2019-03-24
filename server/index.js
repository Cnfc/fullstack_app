const express = require('express');

require('./service/passport');
const authRoutes = require('./routes/authRoutes');

// Init
const app = express();

// Passport Google+


// Routes
authRoutes(app);


const PORT = process.env.PORT || 5000
app.listen(PORT);