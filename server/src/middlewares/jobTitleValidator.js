const { body } = require("express-validator");

exports.addJobTitleValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Job title must be between 5 and 40 characters"),
];

exports.editJobTitleValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Job title must be between 5 and 40 characters"),

  body("id").trim().isNumeric().withMessage("Id should be a number"),
];

exports.deleteJobTitleValidator = [
  body("id").trim().isNumeric().withMessage("Id should be a number"),
];
