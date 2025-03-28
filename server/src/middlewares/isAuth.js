const jwt = require("jsonwebtoken");

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    const err = new Error("Not authenticated");
    err.statusCode = 401;
    return next(err);
  }
  
  const payload = jwt.verify(token, process.env.JWT_SECRET);
  req.userId = payload.userId;

  next();
};
