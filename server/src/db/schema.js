import {
  bigint,
  boolean,
  mysqlTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";

export const hrsTable = mysqlTable("hrs", {
  id: serial().primaryKey(),
  fullName: varchar({ length: 20 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull(),
});

export const employeesTable = mysqlTable("employees", {
  id: serial().primaryKey(),
  fullName: varchar({ length: 20 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  phoneNumber: varchar({ length: 15 }).notNull().unique(),
  status: boolean().notNull().default(false),
  department: varchar({ length: 40 }).references(() => departmentsTable.name),
  jobTitle: varchar({ length: 40 }).references(() => jobTitleTable.name),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp(),
  createdBy: bigint({ mode: "bigint", unsigned: true }).references(() => hrsTable.id),
  updatedBy: bigint({ mode: "bigint", unsigned: true }).references(() => hrsTable.id),
});

export const departmentsTable = mysqlTable("departments", {
  id: serial().primaryKey(),
  name: varchar({ length: 40 }).notNull().unique(),
});

export const jobTitleTable = mysqlTable("job_title", {
  id: serial().primaryKey(),
  name: varchar({ length: 40 }).notNull().unique(),
});
