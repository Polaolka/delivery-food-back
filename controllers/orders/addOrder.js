const { Order } = require("../../models/order");

require("dotenv").config();

const { RequestError, sendEmail } = require("../../helpers");
const { BASE_URL } = process.env;

const addOrder = async (req, res) => {
//   const { _id: owner } = req.user;
  const { owner_email } = req.body;
  const result = await Order.create({...req.body});

//   const user = await User.findOne({ email });

//   if (!user) {
//     throw RequestError(404, "Not Found");
//   }

  const orderEm = {
    to: owner_email,
    subject: "Order info",
    html: `<p>Your order successfully created</p>`,
  };

  await sendEmail(orderEm);

  res.status(201).json({result});
};

module.exports = addOrder;
