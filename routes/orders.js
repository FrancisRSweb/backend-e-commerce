const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

//CREAR PEDIDO
router.post('/', async (req, res) => {
  console.log('BODY', req.body);
  const order = new Order({
    email: req.body.email,
    items: req.body.items,
  });
  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
