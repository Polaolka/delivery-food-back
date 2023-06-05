const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const orderSchema = new Schema(
  {
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Food",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

orderSchema.post("save", handleMongooseError);

const addOrderSchema = Joi.object({
  owner_id: Joi.string().required(),
  shop: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().required().trim(),
        quantity: Joi.number().integer().min(1).required(),
      })
    )
    .required(),
});

const schemas = {
  addOrderSchema,
};

const Order = model("order", orderSchema);

module.exports = {
  schemas,
  Order,
};
