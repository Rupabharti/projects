import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bookRoute from './Router/bookroute.js';
import userRoute from './Router/user.route.js';
import cors from 'cors';

// Initialize the Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// MongoDB connection
const PORT = process.env.PORT || 4001;
const URL = process.env.URL;

try {
    // MongoDB connection without deprecated options
    mongoose.connect(URL);
    console.log("DB connection was successful");
} catch (error) {
    console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
