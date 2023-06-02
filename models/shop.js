const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const shopSchema = new Schema(
  {
    shop_name: {
      type: String,
      required: [true, "Set name for shop"],
    },
  },
  { versionKey: false, timestamps: true }
);

shopSchema.post("save", handleMongooseError);

const addShopSchema = Joi.object({
    shop_name: Joi.string().required(),
});

const schemas = {
    addShopSchema,
};

const Shop = model("shop", shopSchema);

module.exports = {
  schemas,
  Shop,
};
