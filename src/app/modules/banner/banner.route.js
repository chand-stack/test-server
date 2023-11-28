const express = require("express");
const {
  createBannerController,
  getBannerController,
} = require("./banner.controller");

const router = express.Router();

router.post("/", createBannerController);
router.get("/", getBannerController);

module.exports = router;
