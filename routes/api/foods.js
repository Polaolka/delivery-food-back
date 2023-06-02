const express = require("express");

const ctrl = require("../../controllers/foods");

const {validateBody } = require("../../middlewares");

const {schemas} = require("../../models/food");

const {ctrlWrapper} = require("../../helpers");

const {isValidId, upload} = require("../../middlewares");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), upload.single("img"), ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

router.patch("/img", upload.single("img"), ctrlWrapper(ctrl.updateImg));


module.exports = router;
