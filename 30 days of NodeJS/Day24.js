// Problem: Express Route for Product CRUD Operations

// Problem Statement: Create Express routes for handling CRUD operations on products using MongoDB and Mongoose. Implement routes for creating, reading, updating, and deleting products.

/**
 * Express route to create a new product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function createProductRoute(req, res) {
    const { name, price, quantity } = req.body;
    const product = new Product({ name, price, quantity });
    product.save()
        .then((createdProduct) => {
            res.status(201).json(createdProduct);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}

/**
 * Express route to retrieve all products
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function getAllProductsRoute(req, res) {
    Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}

/**
 * Express route to update a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function updateProductRoute(req, res) {
    const { id } = req.params;
    const { name, price, quantity } = req.body;
    Product.findByIdAndUpdate(id, { name, price, quantity }, { new: true })
        .then((updatedProduct) => {
            res.json(updatedProduct);
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}

/**
 * Express route to delete a product
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function deleteProductRoute(req, res) {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then(() => {
            res.json({ message: 'Product deleted successfully' });
        })
        .catch((error) => {
            res.status(500).json({ error: error.message });
        });
}


const mongoose = require('mongoose');
const express = require('express');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => console.log('Connected to MongoDB ✅'))
    .catch(err => console.error('Error connecting to MongoDB 🚫:', err));

const app = express();
app.use(express.json());
app.get("/api/product/get", getAllProductsRoute)
app.post("/api/product/create", createProductRoute)
app.put("/api/product/update/:id", updateProductRoute)
app.delete("/api/product/delete/:id", deleteProductRoute)

app.listen(3001, () => {
    console.log(`Server is running on port ${3001}`);
});