const express = require("express");
const authRoute = require("./src/routes/authRoute");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(authRoute);

// handle errors
app.use((error, _req, res, _next) => {
  console.log({ error });
  res
    .status(error.statusCode || 500)
    .json({ message: error.message, statusCode: error.statusCode || 500 });
});

app.listen(3000);
