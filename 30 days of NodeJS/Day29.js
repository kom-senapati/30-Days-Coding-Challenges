// Error Handling Middleware

// Problem Statement: You are developing a complex web application with multiple routes and middleware in Node.js and Express. You want to implement a centralized error handling mechanism to catch and handle errors gracefully without crashing the server. Design a middleware function that intercepts errors thrown by route handlers or other middleware and sends an appropriate error response to the client.

function errorHandler(err, req, res, next) {
    console.error(err);
    const statusCode = err.statusCode || 500;
    res.status(statusCode);
    res.json({
        error: {
            message: err.message || 'Internal Server Error'
        }
    });
}

const express = require('express');
const app = express();
app.use(express.json());
const products = [
    { id: 404, name: 'Scaler Bag', tokens: 500 },
    { id: 400, name: 'Scaler Hoodie', tokens: 2000 },
    { id: 503, name: 'Scaler shoes', price: 1000 }
];
app.get('/api/products/:id', (req, res, next) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (!product) {
        const err = new Error('Product not found');
        err.statusCode = 404;
        return next(err);
    }
    res.json(product);
});
app.use(errorHandler);
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
