/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const DB = process.env.MONGO_URI

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(bodyParser.json());

app.use('/items', itemRoutes);

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
