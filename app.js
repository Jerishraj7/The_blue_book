const express = require('express'); // Import Express
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');



const app = express(); // Create an app instance

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', productRoutes);
app.use('/api', cartRoutes);
app.use('/api', orderRoutes);
// Middleware
app.use(express.json()); // Parse JSON requests

// Use user routes
app.use('/api', userRoutes);


const uri = "mongodb+srv://jerishraj7:O6IdMb127k8T7oUA@cluster0.5ips3gw.mongodb.net/bluebook?retryWrites=true&w=majority&appName=Cluster0";

// Define a route for the "Hello World" endpoint
app.get('/', (req, res) => {
    res.send('Hello World');
});

//connecting mango db
mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Connection error:', err));



// Start the server
const PORT = 3000; // Define a port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});