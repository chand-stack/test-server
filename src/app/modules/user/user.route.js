const express = require("express");
const {
  createUserController,
  getAllUserController,
  makeAdminController,
  getSingleUserController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.patch("/:id", makeAdminController);
router.get("/:email", getSingleUserController);

module.exports = router;
