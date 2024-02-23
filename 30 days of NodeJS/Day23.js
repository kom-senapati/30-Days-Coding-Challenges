// Problem: Mongoose Population

// Problem Statement: Extend the previous "Product" schema to include a reference to a "Category" entity. Implement a Mongoose population query to retrieve all products with their corresponding category details.

/**
 * Retrieves all products with populated category details from MongoDB
 * @returns {Array} - Array of product objects with populated category details
 */
function getProductsPopulatedWithCategory() {
    return Product.find().populate('category').exec();
}
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: String,
    description: String
});
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});
const Category = mongoose.model('Category', categorySchema);
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('Connected to MongoDB ✅');
        getProductsPopulatedWithCategory().then(prods => console.log(prods));
    })
    .catch(err => console.error('Error connecting to MongoDB 🚫:', err));
