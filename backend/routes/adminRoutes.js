const express = require("express");
const router = express.Router();
const { adminLogin } = require("../controllers/adminLoginController");

router.post("/login", adminLogin);

module.exports = router;
