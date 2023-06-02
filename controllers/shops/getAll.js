const { Shop } = require("../../models/shop");

const getAll = async (req, res) => {
  const result = await Shop.find({});
  res.json(result);
};

module.exports = getAll;