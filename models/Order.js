const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // id del pedido, email cliente, array objetos
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      _id: false,
      id: String,
      qty: Number,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
