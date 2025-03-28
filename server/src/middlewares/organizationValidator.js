const { param, body } = require("express-validator");

exports.getOrganizationValidator = [
  param("type")
    .trim()
    .isIn(["department", "jobTitle"])
    .withMessage("Type should be department or jobTitle"),
];

exports.addOrganizationValidator = [
  param("type")
    .trim()
    .isIn(["department", "jobTitle"])
    .withMessage("Type should be department or jobTitle"),

  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Name must be between 5 and 40 characters"),
];

exports.editOrganizationValidator = [
  param("type")
    .trim()
    .isIn(["department", "jobTitle"])
    .withMessage("Type should be department or jobTitle"),

  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Name must be between 5 and 40 characters"),

  body("id").trim().isNumeric().withMessage("Id should be a number"),
];

exports.deleteOrganizationValidator = [
  param("type")
    .trim()
    .isIn(["department", "jobTitle"])
    .withMessage("Type should be department or jobTitle"),

  body("id").trim().isNumeric().withMessage("Id should be a number"),
];
