const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');

// Add product to cart
router.post('/cart', async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Check if the cart already exists for the user
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // If cart exists, check if the product is already in the cart
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

            if (productIndex > -1) {
                // Product exists in the cart, update the quantity
                cart.products[productIndex].quantity += quantity;
            } else {
                // Product does not exist, add new product
                cart.products.push({ productId, quantity });
            }
        } else {
            // If no cart exists, create a new cart
            cart = new Cart({
                userId,
                products: [{ productId, quantity }]
            });
        }

        await cart.save(); // Save cart
        res.status(200).json(cart); // Return the updated cart
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user's cart
router.get('/cart/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const cart = await Cart.findOne({ userId }).populate('products.productId'); // Populate product details
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Remove a product from the cart
router.delete('/cart/:userId/:productId', async (req, res) => {
    try {
        const { userId, productId } = req.params;

        const cart = await Cart.findOne({ userId });
        if (cart) {
            cart.products = cart.products.filter(p => p.productId.toString() !== productId);
            await cart.save();
            return res.status(200).json(cart);
        }

        res.status(404).json({ message: 'Cart not found' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
