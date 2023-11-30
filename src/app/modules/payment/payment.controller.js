const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.PAYMENT_SECRET_KEY);

const paymentIntentController = async (req, res) => {
  try {
    const { price } = req.body;
    const amount = parseInt(price * 100);
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.status(201).json({
      status: "success",
      message: "successfully getting paymentIntent",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "something went wrong",
      data: error,
    });
  }
};

module.exports = {
  paymentIntentController,
};
