import {
  bigint,
  boolean,
  int,
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
  department: varchar({ length: 20 }).notNull(),
  jobTitle: varchar({ length: 255 }).notNull(),
  phoneNumber: varchar({ length: 15 }).notNull().unique(),
  status: boolean().notNull().default(false),
  createdAt: timestamp().defaultNow().notNull(),
  updatedAt: timestamp(),
  createdBy: bigint({ mode: "bigint", unsigned: true }).references(
    () => hrsTable.id
  ),
  updatedBy: bigint({ mode: "bigint", unsigned: true }).references(
    () => hrsTable.id
  ),
});
