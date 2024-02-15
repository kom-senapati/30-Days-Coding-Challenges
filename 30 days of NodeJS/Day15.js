// Problem: Express Logging Middleware

// Problem Statement: Create a logging middleware for an Express application. The middleware should log detailed information about each incoming request, including the timestamp, HTTP method, URL, request headers, and request body.

/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    const timestamp = new Date().toLocaleString();

    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    console.log('Request Headers:', (req.headers));
    console.log('Request Body:', req.body);
    next();
}

const express = require('express');
const app = express();
app.use(loggingMiddleware);
app.get('/', (req, res) => {
    res.send("Hello there 👋");
});
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});