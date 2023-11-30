const express = require("express");
const { paymentIntentController } = require("./payment.controller");

const router = express.Router();

router.post("/", paymentIntentController);

module.exports = router;
