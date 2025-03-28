const { body, query } = require("express-validator");
const db = require("../db");
const { departmentsTable, jobTitleTable } = require("../db/schema");
const { eq } = require("drizzle-orm");

exports.getEmployeeValidator = [
  query("pageNumber")
    .optional()
    .isNumeric()
    .withMessage("Page number must be a number"),

  query("pageSize")
    .optional()
    .isNumeric()
    .withMessage("Page number must be a number"),
];

exports.addEmployeeValidator = [
  body("email").trim().isEmail().withMessage("Enter a valid email"),

  body("fullName")
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Name must be between 5 and 20 characters"),

  body("department")
    .trim()
    .custom(async (value, { req }) => {
      const [department] = await db
        .select({ id: departmentsTable.id })
        .from(departmentsTable)
        .where(eq(value, departmentsTable.name));

      if (!department) {
        throw new Error("Department not found");
      }

      req.body.departmentId = department.id;
    }),

  body("jobTitle")
    .trim()
    .custom(async (value, { req }) => {
      const [jobTitle] = await db
        .select({ id: jobTitleTable.id })
        .from(jobTitleTable)
        .where(eq(value, jobTitleTable.name));

      if (!jobTitle) {
        throw new Error("Job title not found");
      }

      req.body.jobTitleId = jobTitle.id;
    }),

  body("phoneNumber")
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage("Enter a valid phone number"),

  body("status").isBoolean().withMessage("Status must be a boolean"),
];

exports.editEmployeeValidator = [
  body("id").isNumeric().withMessage("Id must be a number"),

  body("email").optional().trim().isEmail().withMessage("Enter a valid email"),

  body("fullName")
    .optional()
    .trim()
    .isLength({ min: 5, max: 20 })
    .withMessage("Name must be between 5 and 20 characters"),

  body("department")
    .optional()
    .trim()
    .custom(async (value, { req }) => {
      const [department] = await db
        .select({ id: departmentsTable.id })
        .from(departmentsTable)
        .where(eq(value, departmentsTable.name));

      if (!department) {
        throw new Error("Department not found");
      }

      req.body.departmentId = department.id;
    }),

  body("jobTitle")
    .optional()
    .trim()
    .custom(async (value, { req }) => {
      const [jobTitle] = await db
        .select({ id: jobTitleTable.id })
        .from(jobTitleTable)
        .where(eq(value, jobTitleTable.name));

      if (!jobTitle) {
        throw new Error("Job title not found");
      }

      req.body.jobTitleId = jobTitle.id;
    }),

  body("phoneNumber")
    .optional()
    .trim()
    .isLength({ min: 10, max: 15 })
    .withMessage("Enter a valid phone number"),

  body("status").optional().isBoolean().withMessage("Status must be a boolean"),
];

exports.deleteEmployeeValidator = [
  body("id").isNumeric().withMessage("Id must be a number"),
];
