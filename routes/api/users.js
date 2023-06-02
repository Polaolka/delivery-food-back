const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/users");

const {
  validateBody,
} = require("../../middlewares");

const { schemas } = require("../../models/user");

const { ctrlWrapper } = require("../../helpers");

// new user
router.post("/", validateBody(schemas.registerSchema), ctrlWrapper(ctrl.register));

// get all users
router.get("/", ctrlWrapper(ctrl.getAll) );

// router.get("/current", ctrlWrapper(ctrl.getCurrent));

module.exports = router;
