const { Coupon } = require("../../models/coupon");

const getAll = async (req, res) => {
  const result = await Coupon.find({});
  res.json(result);
};

module.exports = getAll;