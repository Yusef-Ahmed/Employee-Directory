const express = require("express");
const departmentController = require("../controllers/departmentController");
const departmentValidator = require("../middlewares/departmentValidator");
const validateHandler = require("../middlewares/validateHandler");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

router.get(
  "/department",
  isAuth,
  departmentController.getDepartment
);

router.get(
  "/department/:id",
  isAuth,
  departmentController.singleDepartment
);

router.post(
  "/department",
  isAuth,
  departmentValidator.addDepartmentValidator,
  validateHandler,
  departmentController.addDepartment
);

router.put(
  "/department",
  isAuth,
  departmentValidator.editDepartmentValidator,
  validateHandler,
  departmentController.editDepartment
);

router.delete(
  "/department",
  isAuth,
  departmentValidator.deleteDepartmentValidator,
  validateHandler,
  departmentController.deleteDepartment
);

module.exports = router;
