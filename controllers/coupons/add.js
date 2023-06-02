const { Coupon } = require("../../models/coupon");
const voucher_codes = require("voucher-code-generator");

const add = async (req, res) => {
  const code = voucher_codes.generate({
    pattern: "##-###-##",
  });
  const result = await Coupon.create({ ...req.body, code: [...code] });

  res.status(201).json(result);
};

module.exports = add;
