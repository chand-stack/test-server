const express = require("express");
const { setToken } = require("./verifyToken");
const router = express.Router();
router.post("/", setToken);
module.exports = router;
