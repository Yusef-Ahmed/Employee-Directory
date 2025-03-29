const express = require("express");
const employeesController = require("../controllers/employeesController");
const employeesValidator = require("../middlewares/employeeValidator");
const validateHandler = require("../middlewares/validateHandler");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

router.get(
  "/employees",
  isAuth,
  employeesValidator.getEmployeeValidator,
  validateHandler,
  employeesController.allEmployees
);

router.get(
  "/employees/:id",
  isAuth,
  employeesValidator.getSingleEmployeeValidator,
  validateHandler,
  employeesController.singleEmployee
);

router.post(
  "/employees",
  isAuth,
  employeesValidator.addEmployeeValidator,
  validateHandler,
  employeesController.addEmployee
);

router.put(
  "/employees",
  isAuth,
  employeesValidator.editEmployeeValidator,
  validateHandler,
  employeesController.editEmployee
);

router.delete(
  "/employees",
  isAuth,
  employeesValidator.deleteEmployeeValidator,
  validateHandler,
  employeesController.deleteEmployee
);

module.exports = router;
