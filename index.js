const express = require('express'); // Import express
const app = express(); // Create an express app
const PORT = process.env.PORT || 8080; // Set the port

app.get('/', (req, res) => res.send('Hello World!')); // Get the index page
app.get('/about', (req, res) => res.json({ message: 'About page nih hlo' })); // Get the about page

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`)); // Listen for requests
