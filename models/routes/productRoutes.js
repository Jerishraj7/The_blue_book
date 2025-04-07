const express = require('express');
const router = express.Router(); // Create a router instance
const Product = require('../models/Product'); // Import the Product model


// POST (Create) a new product
router.post('/products', async (req, res) => {
    try {
        console.log(req.body);
        const product = new Product(req.body); // Create product from request body
        await product.save(); // Save to the database
        res.status(201).json(product); // Return the created product
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// GET all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch all products
        res.status(200).json(products); // Send the products as a JSON response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET a product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); // Fetch product by ID
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
