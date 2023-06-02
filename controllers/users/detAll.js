const { User } = require("../../models/user");

const getAll = async (req, res) => {
  const result = await User.find({});
  res.json(result);
};

module.exports = getAll;