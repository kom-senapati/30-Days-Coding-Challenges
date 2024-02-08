// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
    const number = parseInt(req.params.number);

    if (!Number.isNaN(number) && number > 0) {
        res.send(`Success: Received : ${number}`);
    } else {
        throw new Error('Number is not a positive integer');
    }
}

const express = require('express');
const app = express();
app.use((err, req, res, next) => {
    if (err.message === 'Number is not a positive integer') {
        res.status(400).send('Please provide a positive integer only.');
    } else {
        next(err);
    }
});
app.get('/check/:number', positiveIntegerHandler);
app.listen(3001, () => console.log(`Server is running...`));
