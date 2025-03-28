const { body } = require("express-validator");

exports.addDepartmentValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Department must be between 5 and 40 characters"),
];

exports.editDepartmentValidator = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Department must be between 5 and 40 characters"),

  body("id").trim().isNumeric().withMessage("Id should be a number"),
];

exports.deleteDepartmentValidator = [
  body("id").trim().isNumeric().withMessage("Id should be a number"),
];
