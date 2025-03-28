import { validationResult } from "express-validator";

export const validateHandler = (req, _res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const err = new Error("Validation failed");
    err.statusCode = 422;
    err.ErrorData = errors.array().map((error) => error.msg);
    return next(err);
  }
  next();
};

