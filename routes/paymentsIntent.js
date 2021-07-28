const express = require('express');
const getOrderAmount = require('../data/getOrderAmount');
const router = express.Router();

const stripe = require('stripe')(process.env.STRIPE_SK);

//CREAR INTENTO DE PAGO
router.post('/', async (req, res) => {
  const items = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: await getOrderAmount(items),
    currency: 'eur',
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
