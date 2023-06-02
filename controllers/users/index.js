const register = require("./register");
const getCurrent = require("./getCurrent");
const getAll = require("./detAll");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail")

module.exports = {
  register,
  getCurrent,
  verifyEmail,
  resendVerifyEmail,
  getAll
};
