const express = require("express");
const router = express.Router();
const {
  getRegister,
  registerUser,
  getLogin,
  loginUser,
} = require("../controllers/loginController2");

router.route("/").get(getLogin).post(loginUser);
router.route("/register").get(getRegister).post(registerUser);

module.exports = router;