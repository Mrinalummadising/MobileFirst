const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/auth');
const starWarsRoutes = require('./routes/starWars');

app.use('/api/auth', authRoutes);
app.use('/api/starwars', starWarsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
