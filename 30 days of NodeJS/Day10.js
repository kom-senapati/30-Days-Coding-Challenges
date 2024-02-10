// Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
    const filePath = req.url === '/' ? 'index.html' : req.url.slice(1);
    res.sendFile(path.join(__dirname, 'public', filePath), (err) => {
        if (err) {
            console.error(err);
            res.status(404).send('File not found');
        }
    });
}

const express = require('express');
const path = require('path');
const app = express();
app.use(staticFileServer);
app.listen(3001, () => console.log(`Server is running...`));