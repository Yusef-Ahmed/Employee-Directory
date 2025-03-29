const express = require("express");
const authRoute = require("./src/routes/authRoute");
const employeesRoute = require("./src/routes/employeesRoute");
const departmentRoute = require("./src/routes/departmentRoute");
const jobTitleRoute = require("./src/routes/jobTitleRoute");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(authRoute);

app.use(employeesRoute);

app.use(departmentRoute);

app.use(jobTitleRoute);

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
