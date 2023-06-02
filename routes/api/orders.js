const express = require("express");

const ctrl = require("../../controllers/orders");

const {validateBody, isValidId } = require("../../middlewares");

const {schemas} = require("../../models/order");

const {ctrlWrapper} = require("../../helpers");


const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addOrderSchema), ctrlWrapper(ctrl.addOrder));

router.put("/:id", isValidId, validateBody(schemas.addOrderSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));


module.exports = router;