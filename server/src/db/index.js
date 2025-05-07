require("dotenv").config();
const { drizzle } = require("drizzle-orm/mysql2");

const db = drizzle(
  process.env.NODE_ENV === "docker"
    ? process.env.DATABASE_URL_DOCKER
    : process.env.DATABASE_URL
);

module.exports = db;
