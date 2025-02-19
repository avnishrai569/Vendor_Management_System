const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./vendor-management-system/config/db');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

// Your routes and middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
