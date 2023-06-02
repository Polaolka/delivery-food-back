const {
  validateBody,
  validateFavoriteBody,
  validateSubscrBody,
} = require("./validateBody");
const isValidId = require("./isValidId");
const upload = require("./upload");

module.exports = {
  validateFavoriteBody,
  validateBody,
  isValidId,
  validateSubscrBody,
  upload,
};
