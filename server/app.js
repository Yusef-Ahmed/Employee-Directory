const express = require("express");
const authRoute = require("./src/routes/authRoute");
const employeesRoute = require("./src/routes/employeesRoute");
const organizationRoute = require("./src/routes/organizationRoute");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(authRoute);

app.use(employeesRoute);

app.use(organizationRoute);

// handle errors
app.use((error, _req, res, _next) => {
  res
    .status(error.statusCode || 500)
    .json({
      message: error.message,
      statusCode: error.statusCode || 500,
      ErrorData: error.ErrorData,
    });
});

app.listen(3000);
