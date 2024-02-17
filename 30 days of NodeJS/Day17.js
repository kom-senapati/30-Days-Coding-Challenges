// Problem: Mongoose Schema and Model

// Problem Statement: Define a Mongoose schema for a "User" with properties: "username" (string) and "email" (string). Create a Mongoose model for the User schema. Implement a function to add a new user to the MongoDB database.

/**
 * Adds a new user to the MongoDB database
 * @param {Object} user - User object with properties username and email
 */
function addUserToDatabase(user) {
    const newUser = new userModel(user);
    newUser.save()
        .then(() => console.log('User created ✅'))
        .catch(err => console.log(err));
}

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
const userModel = mongoose.model("User", userSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('MongoDB connected ✅');
        addUserToDatabase({ username: 'john_doe', email: 'john@example.com' });
    })
    .catch((err) => console.log(err));
