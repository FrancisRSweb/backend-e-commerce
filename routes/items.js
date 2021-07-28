const express = require('express');
const getItemById = require('../data/getItemById');
const router = express.Router();

//MODELS
const Item = require('../models/Item');

// GET ITEMS
router.get('/', async (req, res) => {
  try {
    const itemsFromDB = await Item.find();
    res.json(itemsFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// GET ITEM
router.get('/item', async (req, res) => {
  const itemId = req.body.itemId;
  try {
    const itemFromDB = await getItemById(itemId);
    res.json(itemFromDB);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// CREATE ITEM
router.post('/', async (req, res) => {
  console.log(req.body);
  const item = new Item({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const newItem = await item.save();
    res.json(newItem);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
