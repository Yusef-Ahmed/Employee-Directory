const express = require("express");
const jobTitleController = require("../controllers/jobTitleController");
const jobTitleValidator = require("../middlewares/jobTitleValidator");
const validateHandler = require("../middlewares/validateHandler");
const isAuth = require("../middlewares/isAuth");

const router = express.Router();

router.get(
  "/jobTitle",
  isAuth,
  jobTitleController.getJobTitle
);

router.post(
  "/jobTitle",
  isAuth,
  jobTitleValidator.addJobTitleValidator,
  validateHandler,
  jobTitleController.addJobTitle
);

router.put(
  "/jobTitle",
  isAuth,
  jobTitleValidator.editJobTitleValidator,
  validateHandler,
  jobTitleController.editJobTitle
);

router.delete(
  "/jobTitle",
  isAuth,
  jobTitleValidator.deleteJobTitleValidator,
  validateHandler,
  jobTitleController.deleteJobTitle
);

module.exports = router;
