const { Order } = require("../../models/order");

const getAll = async (req, res) => {
  const { _id: owner } = req.user;
  const conditions = { owner };
  const result = await Order.find(conditions, "-createdAt -updatedAt").populate("owner", "name email");
  res.json(result);
};

module.exports = getAll;