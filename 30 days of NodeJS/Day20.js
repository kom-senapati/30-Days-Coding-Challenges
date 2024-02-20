// Problem: Express Route with MongoDB Aggregation

// Problem Statement: Create an Express route that uses MongoDB aggregation to calculate and return the average age of all users in the database.

/**
 * Express route to calculate the average age of all users in MongoDB
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function averageAgeOfUsers(req, res) {
    User.aggregate([
        { $group: { _id: null, averageAge: { $avg: "$age" } } }
    ])
        .then(averageAge => {
            if (averageAge.length === 0) {
                res.status(404).json({ error: "No users found" });
            } else {
                res.json({ averageAge: averageAge[0].averageAge });
            }
        })
        .catch(err => {
            console.error('Error calculating average age:', err);
            res.status(500).json({ error: "Internal Server Error" });
        });
}

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = mongoose.model('User', { username: String, age: Number })
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('MongoDB connected ✅');
    })
    .catch((err) => console.log(err));

app.get('/average-age', averageAgeOfUsers);
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});