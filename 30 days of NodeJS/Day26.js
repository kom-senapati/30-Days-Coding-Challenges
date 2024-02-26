// Problem: Aggregation Pipeline for Product Stats

// Problem Statement: Create an aggregation pipeline to calculate statistics for products in MongoDB. Implement a function to execute the pipeline and return aggregated results like the total number of products, the average price, and the highest quantity.

/**
 * Executes an aggregation pipeline to calculate product statistics
 * @returns {Object} - Aggregated product statistics
 */
function getProductStatistics() {
    const pipeline = [
        {
            $group: {
                _id: null,
                totalProducts: { $sum: 1 },
                averagePrice: { $avg: "$price" },
                highestQuantity: { $max: "$quantity" }
            }
        }
    ];

    return Product.aggregate(pipeline)
        .then(result => {
            return result[0];
        })
        .catch(error => {
            console.error("Error occurred while calculating product statistics:", error.message);
            throw error;
        });
}

const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    quantity: Number
});
const Product = mongoose.model('Product', productSchema);
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('MongoDB connected ✅');
        getProductStatistics()
            .then(productStats => { console.log("Product Statistics:", productStats); })
            .catch(error => { console.error("Error occurred:", error); });
    })
    .catch((err) => console.log(err));
