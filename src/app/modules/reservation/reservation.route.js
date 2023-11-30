const express = require("express");
const {
  createReservationController,
  getAllReservationController,
  deleteReservationController,
  getAllReservationAdminController,
  updateReservationController,
} = require("./reservation.controller");
const router = express.Router();

router.post("/", createReservationController);
router.get("/admin", getAllReservationAdminController);
router.get("/:email", getAllReservationController);
router.delete("/:id", deleteReservationController);
router.patch("/:id", updateReservationController);
module.exports = router;
