const getItemById = require('./getItemById');

module.exports = getOrderAmount = async (items) => {
  let amount = 0;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const itemDB = await getItemById(item.id);

    let operation = itemDB.price * item.qty;
    amount += operation;
  }
  const onlyTwoDecimals = amount.toFixed(2);
  const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10);
  return parsedAmount;
};
