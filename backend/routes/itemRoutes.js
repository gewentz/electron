const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create a new item
router.post('/', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read an item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).send();
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read an item by name
router.get('/name/:name', async (req, res) => {
  try {
    const item = await Item.findByName(req.params.name);
    if (!item) return res.status(404).send();
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update an item by ID
router.patch('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).send();
    res.status(200).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).send();
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
