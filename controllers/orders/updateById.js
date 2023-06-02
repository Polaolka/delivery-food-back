const {Order} = require("../../models/order");

const { RequestError } = require("../../helpers");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Order.findByIdAndUpdate(id, req.body, {new: true});
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = updateById;