// Problem: Express Route with MongoDB Query

// Problem Statement: Create an Express route that retrieves all users from the MongoDB database and returns them as a JSON response.

/**
 * Express route to get all users from MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function getAllUsers(req, res) {
    userModel.find()
        .then(users => {
            console.log("Users fetched ✅")
            res.json(users);
        })
        .catch(error => {
            console.error('Error retrieving users:', error.message);
            res.status(500).json({ error: 'Internal server error' });
        });
}

const mongoose = require('mongoose');
const express = require('express');
const app = express();

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
const userModel = mongoose.model("User", userSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('MongoDB connected ✅');
    })
    .catch((err) => console.log(err));

app.get('/users', getAllUsers);
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
