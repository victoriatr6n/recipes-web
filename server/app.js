const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // For loading environment variables

const app = express();
const recipeRoutes = require('./routes/recipeRoutes');  // Import your routes

const corsOptions = {
    origin: 'http://localhost:3000',  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}

// Middleware
app.use(cors(corsOptions));
app.use(express.json());  // Parse JSON bodies
console.log('MongoDB URL:', process.env.DB_URL);
// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

// Use routes
app.use('/api', recipeRoutes);  // Prefix routes with /api

// Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

module.exports = app;