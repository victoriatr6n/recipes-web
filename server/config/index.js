const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Define the configuration object
const config = {
    PORT: process.env.PORT || 5000, // default to port 3000 if not specified
    databaseUrl: process.env.DB_URL, 
};

module.exports = config;