const { body } = require("express-validator");

exports.signupValidator = [
  body("email").trim().isEmail().withMessage("Enter a valid email"),

  body("fullName")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Name must be between 5 and 20 characters"),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];

exports.loginValidator = [
  body("email").trim().isEmail().withMessage("Enter a valid email"),

  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];
