const express = require("express");
const cors = require("cors");
const app = express();
const serviceRouter = require("./app/modules/service/service.route");
const bannerRouter = require("./app/modules/banner/banner.route");
const userRouter = require("./app/modules/user/user.route");
const recommendRouter = require("./app/modules/recommendation/recommen.route");
const paymentIntentRouter = require("./app/modules/payment/payment.route");
const reservationRouter = require("./app/modules/reservation/reservation.route");
const tokenRouter = require("./middlewares/tokenRoute");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("server cholche ok");
});
app.use("/create-payment-intent", paymentIntentRouter);
app.use("/service", serviceRouter);
app.use("/banner", bannerRouter);
app.use("/user", userRouter);
app.use("/recommend", recommendRouter);
app.use("/reservation", reservationRouter);
app.use("/jwt", tokenRouter);

module.exports = app;
