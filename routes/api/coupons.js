const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/coupons");

const {
  validateBody,
} = require("../../middlewares");

const { schemas } = require("../../models/coupon");

const { ctrlWrapper } = require("../../helpers");

// add coupon
router.post("/", validateBody(schemas.addShopSchema), ctrlWrapper(ctrl.add));

// get coupons
router.get("/", ctrlWrapper(ctrl.getAll));

module.exports = router;