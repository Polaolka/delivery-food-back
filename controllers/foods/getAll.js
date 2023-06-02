const { Food } = require("../../models/food");

const getAll = async (req, res) => {
  const { shop_owner_food } = req.body;
  const conditions = {
    shop_owner_food,
  };
  const { page = 1, limit = 6 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Food.find(conditions, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("shop_owner_food", "name");
  res.json(result);
};

module.exports = getAll;
