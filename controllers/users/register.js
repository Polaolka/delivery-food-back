const { nanoid } = require("nanoid");

const { User } = require("../../models/user");

require("dotenv").config();

const { RequestError, sendEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const register = async (req, res) => {
  const { email, phone, address, name } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    throw RequestError(409, "Email already in use");
  }

  // const verificationToken = nanoid();

  const newUser = await User.create({
    ...req.body,
  });
  // const verifyEm = {
  //   to: email,
  //   subject: "Verify Email",
  //   html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Click verify email</a>`,
  // };

  // await sendEmail(verifyEm);
  
  res.status(201).json(newUser);
};

module.exports = register;
