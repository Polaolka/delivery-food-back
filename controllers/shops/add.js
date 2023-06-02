const { Shop } = require("../../models/shop");

const add = async (req, res) => {
  const result = await Shop.create({ ...req.body });

  res.status(201).json(result);
};

module.exports = add;