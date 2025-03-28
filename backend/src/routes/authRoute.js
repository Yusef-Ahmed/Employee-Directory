const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authValidator = require("../middlewares/validators");
const { validateHandler } = require("../middlewares/validateHandler");

router.post(
  "/signup",
  authValidator.signupValidator,
  validateHandler,
  authController.signup
);

router.post(
  "/login",
  authValidator.loginValidator,
  validateHandler,
  authController.login
);

module.exports = router;
