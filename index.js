// index.js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3000;
const mongoString = process.env.DATABASE_URL;

app.use(express.json());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', () => {
    console.log('Database Connected');
});

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, '/')));

// Define route for the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define catch-all route for undefined routes
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});


app.listen(port, () => {
    console.log(`Server Started at http://localhost:${port}`);
});

const routes = require('./routes/users');
// const employeeRoutes = require('./routes/employeeRoutes');


//  '/api' path.
app.use('/api', routes)
