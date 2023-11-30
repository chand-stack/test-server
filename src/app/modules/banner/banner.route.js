const express = require("express");
const {
  createBannerController,
  getBannerController,
  deleteBannerController,
  selectBannerController,
  unselectBannerController,
} = require("./banner.controller");
const { verifyToken } = require("../../../middlewares/verifyToken");

const router = express.Router();

router.post("/", createBannerController);
router.get("/", getBannerController);
router.delete("/:id", verifyToken, deleteBannerController);
router.patch("/:id", selectBannerController);
router.patch("/", unselectBannerController);

module.exports = router;
