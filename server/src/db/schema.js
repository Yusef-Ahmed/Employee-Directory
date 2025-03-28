import {
  boolean,
  mysqlTable,
  timestamp,
  varchar,
  int,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const hrsTable = mysqlTable("hrs", {
  id: int().autoincrement().primaryKey(),
  fullName: varchar({ length: 20 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const employeesTable = mysqlTable("employees", {
  id: int().autoincrement().primaryKey(),
  fullName: varchar({ length: 20 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phoneNumber: varchar({ length: 15 }).notNull().unique(),
  status: boolean().notNull().default(false),
  departmentId: int()
    .notNull()
    .references(() => departmentsTable.id),
  jobTitleId: int()
    .notNull()
    .references(() => jobTitleTable.id),
  createdAt: timestamp()
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp(),
  createdBy: int()
    .notNull()
    .references(() => hrsTable.id),
  updatedBy: int().references(() => hrsTable.id),
});

export const departmentsTable = mysqlTable("departments", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 40 }).notNull().unique(),
});

export const jobTitleTable = mysqlTable("job_titles", {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 40 }).notNull().unique(),
});
