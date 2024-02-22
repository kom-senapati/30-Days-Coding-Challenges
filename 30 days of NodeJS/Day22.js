// Problem: MongoDB CRUD Operations

// Problem Statement: Implement a set of CRUD (Create, Read, Update, Delete) operations for a "Product" entity using MongoDB and Mongoose. Define a Mongoose schema for the product with properties like "name," "price," and "quantity." Implement functions to create, read, update, and delete products.
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => console.log('Connected to MongoDB ✅'))
    .catch(err => console.error('Error connecting to MongoDB 🚫:', err));

/**
 * Creates a new product in MongoDB
 * @param {Object} product - Product object with properties name, price, and quantity
 */
function createProduct(product) {
    const newProduct = new Product(product);
    newProduct.save()
        .then(product => {
            console.log('Product created successfully:', product);
        })
        .catch(error => {
            console.error('Error creating product:', error);
            throw error;
        });
}

/**
 * Retrieves all products from MongoDB
 * @returns {Array} - Array of product objects
 */
function getAllProducts() {
    Product.find()
        .then(products => {
            console.log('All products:', products);
            return products;
        })
        .catch(error => {
            console.error('Error retrieving products:', error);
            throw error;
        });
}

/**
 * Updates a product in MongoDB
 * @param {string} productId - ID of the product to update
 * @param {Object} updatedProduct - Updated product object
 */
function updateProduct(productId, updatedProduct) {
    Product.findByIdAndUpdate(productId, updatedProduct, { new: true })
        .then(product => {
            console.log('Product updated successfully:', product);
            return product;
        })
        .catch(error => {
            console.error('Error updating product:', error);
            throw error;
        });
}

/**
 * Deletes a product from MongoDB
 * @param {string} productId - ID of the product to delete
 */
function deleteProduct(productId) {
    Product.findByIdAndDelete(productId)
        .then(deletedProduct => {
            console.log('Product deleted successfully:', deletedProduct);
            return deletedProduct.productId;
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
        });
}

createProduct({ name: 'Scaler Hoodie', price: 1000, quantity: 10 })
createProduct({ name: 'Scaler T Shirt', price: 600, quantity: 100 })
createProduct({ name: 'Scaler Notebook', price: 90, quantity: 100 })
createProduct({ name: 'Scaler Bag', price: 800, quantity: 5 })
console.log(getAllProducts())
updateProduct('65d7452fd75061f6c4f1ca07', { name: 'Scaler Shirt', price: 2000, quantity: 10 })
deleteProduct('65d7452fd75061f6c4f1ca07')