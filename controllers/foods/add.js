const {Food} = require("../../models/food");


const add = async (req, res) => {
  // const { _id: owner } = req.query;

  const { food_name, price, shop_owner_food } = req.body;



  // const resultUpload = path.join(avatarDir, originalname);

  // await fs.rename(tempUpload, resultUpload);

  const result = await Food.create(food_name, price, shop_owner_food, food_img_URL=url);
  
  res.status(201).json(result);
};

module.exports = add;
