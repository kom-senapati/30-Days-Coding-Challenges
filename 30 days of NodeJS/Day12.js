// Problem: Express Rate Limiting

// Problem Statement: Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.

/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function rateLimitMiddleware(req, res, next) {
    const ip = req.ip;
    const currentTime = Date.now();
    const requests = requestCounts.get(ip) || [];
    const validRequests = requests.filter(
        (time) => currentTime - time <= RATE_LIMIT_WINDOW_MS
    );
    if (validRequests.length >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ error: "Too Many Requests" });
    }
    requestCounts.set(ip, [...validRequests, currentTime]);
    next();
}

const RATE_LIMIT_WINDOW_MS = 50000;
const MAX_REQUESTS_PER_WINDOW = 3;
const requestCounts = new Map();

const express = require("express")
const app = express()
app.use(express.json())

app.get('/home', rateLimitMiddleware, (req, res) => {
    res.json({ "message": "Hello 👋" });
});

app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});