// 7. Problem: Express Middleware

// Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    const timestamp = new Date().toLocaleString()
    console.log(`[${timestamp}] METHOD: ${req.method} ${req.url}`)
    next()
}

const express = require('express')
const app = express()
app.use(requestLoggerMiddleware)
app.get('/', (req, res) => res.send("Day 7 of Node JS"))
app.listen(3001, () => console.log(`Server is running...`))