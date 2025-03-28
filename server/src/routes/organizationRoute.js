const express = require("express");
const organizationController = require("../controllers/organizationController");
const organizationValidator = require("../middlewares/organizationValidator");
const validateHandler = require("../middlewares/validateHandler");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

router.get(
  "/organization/:type",
  isAuth,
  organizationValidator.getOrganizationValidator,
  validateHandler,
  organizationController.getOrganization
);

router.post(
  "/organization/:type",
  isAuth,
  organizationValidator.addOrganizationValidator,
  validateHandler,
  organizationController.addOrganization
);

router.put(
  "/organization/:type",
  isAuth,
  organizationValidator.editOrganizationValidator,
  validateHandler,
  organizationController.editOrganization
);

router.delete(
  "/organization/:type",
  isAuth,
  organizationValidator.deleteOrganizationValidator,
  validateHandler,
  organizationController.deleteOrganization
);

module.exports = router;
