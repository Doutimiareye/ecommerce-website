// index.js
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Define the port for the server
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Sample product data (you can later fetch from a database or API)
const products = [
    {
        id: 1,
        name: 'Laptop',
        description: 'A high-performance laptop with 16GB RAM and 512GB SSD.',
        price: 999.99,
        imageUrl: '/images/laptop.jpg',
    },
    {
        id: 2,
        name: 'Smartphone',
        description: 'A sleek smartphone with an amazing camera and battery life.',
        price: 499.99,
        imageUrl: '/images/smartphone.jpg',
    },
    {
        id: 3,
        name: 'Headphones',
        description: 'Noise-cancelling over-ear headphones with superior sound quality.',
        price: 199.99,
        imageUrl: '/images/headphones.jpg',
    },
    {
        id: 4,
        name: 'Smartwatch',
        description: 'A smartwatch that tracks your fitness and daily activities.',
        price: 149.99,
        imageUrl: '/images/smartwatch.jpg',
    }
];

// Route for the homepage displaying products
app.get('/', (req, res) => {
    res.render('index', { products });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
