const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const foodSchema = new Schema(
  {
    food_name: {
      type: String,
      required: [true, "Set name for food"],
    },
    food_img_URL: {
      type: String,
      default: "",
    },
    price: {
      type: String,
      required: [true, "Set price for food"],
    },
    shop_owner_food: {
      type: Schema.Types.ObjectId,
      ref: "shop",
      required: [true, "Set id for food-shop"],
    },
  },
  { versionKey: false, timestamps: true }
);

foodSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  food_name: Joi.string().min(3).max(50).required(),
  food_img_URL: Joi.string(),
  price: Joi.string().required(),
  shop_owner_food: Joi.string().required().trim(),
});

const schemas = {
  addSchema,
};

const Food = model("food", foodSchema);

module.exports = {
  schemas,
  Food,
};
