import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.js",
  dialect: "mysql",
  dbCredentials: {
    url:
      process.env.NODE_ENV === "docker"
        ? process.env.DATABASE_URL_DOCKER
        : process.env.DATABASE_URL,
  },
});
