const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");

const couponSchema = new Schema(
  {
    coupon_name: {
      type: String,
      required: [true, "Set name for coupon"],
    },
    code: {
      type: String,
      required: [true, "Set code for coupon"],
    },
  },
  { versionKey: false, timestamps: true }
);

couponSchema.post("save", handleMongooseError);

const addCouponSchema = Joi.object({
  coupon_name: Joi.string().required(),
  code: Joi.string().required(),
});

const schemas = {
  addCouponSchema,
};

const Coupon = model("coupon", couponSchema);

module.exports = {
  schemas,
  Coupon,
};
