const express = require("express");
const {
  createRecommenController,
  getAllRecommendController,
} = require("./recommen.controller");
const router = express.Router();

router.post("/", createRecommenController);
router.get("/", getAllRecommendController);

module.exports = router;
