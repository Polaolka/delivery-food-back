const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/shops");

const {
  validateBody,
} = require("../../middlewares");

const { schemas } = require("../../models/shop");

const { ctrlWrapper } = require("../../helpers");

// add shop
router.post("/", validateBody(schemas.addShopSchema), ctrlWrapper(ctrl.add));
// get all shop
router.get("/", ctrlWrapper(ctrl.getAll) );

module.exports = router;