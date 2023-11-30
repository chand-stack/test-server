const express = require("express");
const {
  createUserController,
  getAllUserController,
  makeAdminController,
  getSingleUserController,
  makeUserAdminController,
  adminUserController,
} = require("./user.controller");

const router = express.Router();

router.post("/", createUserController);
router.get("/", getAllUserController);
router.patch("/:id", makeAdminController);
router.patch("/:id", makeUserAdminController);
router.get("/:email", getSingleUserController);
router.get("/admin/:email", adminUserController);

module.exports = router;
