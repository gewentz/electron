/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create a new item
router.post('/', async (req, res) => {
  const { code, name, unit, quantity, price } = req.body;

  try {
    // Verifica se um item com o mesmo código de barras já existe
    let item = await Item.findOne({ code });

    if (item) {
      // Se o item existir, atualize a quantidade
      item.quantity += parseInt(quantity, 10);
      await item.save();
      res.status(200).json(item);
    } else {
      // Se o item não existir, crie um novo
      item = new Item({ code, name, unit, quantity, price });
      await item.save();
      res.status(201).json(item);
    }
  } catch (error) {
    res.status(400).json({ error: 'Error creating or updating item', details: error });
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

// Delete an item by code
router.delete('/delete/:code', async (req, res) => {
  try {
    const item = await Item.findOneAndDelete({ code: req.params.code });
    if (!item) return res.status(404).send({ error: 'Item not found' });
    res.status(200).send({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: 'Error deleting item', details: err });
  }
});

module.exports = router;
