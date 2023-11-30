const express = require("express");
const {
  createServiceController,
  getAllServiceController,
  getSingleServiceController,
  deleteSingleServiceController,
  updateSingleServiceController,
  getServiceCountController,
} = require("./service.controller");
const { verifyToken } = require("../../../middlewares/verifyToken");

const router = express.Router();

router.post("/", createServiceController);
router.get("/", getAllServiceController);
router.get("/count", getServiceCountController);
router.get("/:id", getSingleServiceController);
router.delete("/:id", verifyToken, deleteSingleServiceController);
router.patch("/:id", updateSingleServiceController);

module.exports = router;
