/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create a new item
router.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    res.status(400).send({ error: 'Error creating item', details: err });
  }
});

// Read all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching items', details: err });
  }
});

// Read an item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send({ error: 'Item not found' });
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching item', details: err });
  }
});

// Read an item by name
router.get('/name/:name', async (req, res) => {
  try {
    const item = await Item.findOne({ name: req.params.name });
    if (!item) return res.status(404).send({ error: 'Item not found' });
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send({ error: 'Error fetching item', details: err });
  }
});

// Update an item by ID
router.patch('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).send({ error: 'Item not found' });
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send({ error: 'Error updating item', details: err });
  }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send({ error: 'Item not found' });
    res.status(200).send({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error deleting item', details: err });
  }
});

module.exports = router;
