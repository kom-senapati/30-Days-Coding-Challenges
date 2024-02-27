// Authentication Middleware

// Problem Statement: You are developing a web application with Node.js and Express, and you need to implement an authentication middleware to protect certain routes. The authentication should be token-based and support user roles (e.g., admin, regular user). Design a middleware function that verifies the authenticity of incoming requests and checks if the user has the required role to access certain routes.
function authenticateAndAuthorize(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }
    jwt.verify(token.split(' ')[1],JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        } else {
            let user = decodedToken;
            if (user["role"] !== "user") {
                return res.status(403).json({ message: 'You do not have permission to access this resource' });
            }
            next();
        }
    });
}
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = "ce07c8ea0b477cc23346a1c7131485f9c6d70e80c46886a8db79e4a6bdccd67e"
app.use(express.json());
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = {username, password};
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({username, role: "user" }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});
app.get('/dashboard', authenticateAndAuthorize, (req, res) => {
    res.send('Welcome to the dashboard');
});
app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});
