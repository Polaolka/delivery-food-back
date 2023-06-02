const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");
const Joi = require("joi");


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const phoneRegex = /^\+380\d{9}$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegex,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: 3,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      minlength: 10,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      match: phoneRegex,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  name: Joi.string().required(),
  address: Joi.string().required(),
  phone: Joi.string().pattern(phoneRegex).required(),
});


const schemas = {
  registerSchema,
};

const User = model("user", userSchema);

module.exports = {
  schemas,
  User,
};
