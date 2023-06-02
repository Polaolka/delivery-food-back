const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const couponsRouter = require("./routes/api/coupons");
const foodsRouter = require("./routes/api/foods");
const ordersRouter = require("./routes/api/orders");
const shopsRouter = require("./routes/api/shops");
const usersRouter = require("./routes/api/users");


const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", usersRouter);
app.use("/api/coupons", couponsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/foods", foodsRouter);
app.use("/api/shops", shopsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
