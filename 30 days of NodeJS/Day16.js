// Problem: MongoDB Connection Setup

// Problem Statement: Create an Express application with MongoDB integration using Mongoose. Implement a function to establish a connection to a MongoDB database. Ensure that the connection is successful and log a success message.

/**
 * Establishes a connection to MongoDB using Mongoose
 */
function connectToMongoDB() {
    mongoose.connect("mongodb://localhost:27017/test");

    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1);
    });

    db.once('open', () => {
        console.log('Successfully connected to MongoDB');
    });
}

const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    connectToMongoDB()
    res.send("MongoDB connected ✅")
})
app.listen(3001, () => { console.log("Server is listening on port 3001 ...") })