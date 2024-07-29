/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors({
  origin: '*', // Pode especificar a URL do frontend, se necessário
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/items', itemRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:0506Gg93@cluster0.wavaiyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
