// Problem: Express Authentication Middleware

// Problem Statement: Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized status.

/**
 * Authentication middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticationMiddleware(req, res, next) {
    const token = req.headers.authorization
    if (!token) res.status(401)
    jwt.verify(token.split(' ')[1], JWT_SECRET, (err, user) => {
        if (err) res.send(401)
        req.user = user
        next()
    })
}

const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_SECRET = "9603bb9e437eea64878f9a57aa0a8ae30ea7a89ac0855765b1f4ca3ee8aeb3b0292a5bc282e837825f7366a0ffdd83ad18577b9fd6169f061d8f41db9919b425"
const app = express()
app.use(express.json())
app.post('/login', (req, res) => {
    const { id, username } = req.body;
    if (!id || !username)
        return res.status(400).json({ message: 'User id and username are required' });
    const user = { id, username };
    const token = jwt.sign(user, JWT_SECRET);
    res.json({ token });
});
app.get('/home', authenticationMiddleware, (req, res) => {
    res.send(`Hola ${req.user.username} 👋`);
});
app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});