const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        // Check if the email already exists in the database
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists. Please use a different email.' });
        }

        const user = new User({ name, email, password: hashedPassword }, age); // Create user from request body
        await user.save(); // Save user to database
        res.status(201).json(user); // Return the created user

    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
});


// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare password
        if (password != user.password) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ id: user.id, message: 'Login successful', status: true});
    } catch (error) {
        res.status(500).json({ error: error.message, status: false });
    }
});



module.exports = router; // Export the router
