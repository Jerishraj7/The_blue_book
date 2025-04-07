const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Place an order
router.post('/order', async (req, res) => {
    try {
        const { userId } = req.body;

        // Find the user's cart
        const cart = await Cart.findOne({ userId }).populate('products.productId');
        if (!cart || cart.products.length === 0) {
            return res.status(400).json({ message: 'Cart is empty or not found' });
        }

        // Calculate total price
        const totalPrice = cart.products.reduce((sum, item) => {
            return sum + item.productId.price * item.quantity;
        }, 0);

        // Create a new order
        const order = new Order({
            userId,
            products: cart.products,
            totalPrice
        });

        await order.save();

        // Clear the cart after order is placed
        cart.products = [];
        await cart.save();

        res.status(201).json(order); // Return the order
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get user's orders
router.get('/orders/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const orders = await Order.find({ userId }).populate('products.productId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
