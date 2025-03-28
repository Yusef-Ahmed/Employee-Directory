require('dotenv').config();
const { drizzle } = require("drizzle-orm/mysql2");

const db = drizzle(process.env.DATABASE_URL);

module.exports = db ;