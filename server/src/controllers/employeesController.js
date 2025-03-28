const db = require("../db/index");
const {
  employeesTable,
  departmentsTable,
  jobTitleTable,
} = require("../db/schema");
const { eq, like, and } = require("drizzle-orm");

exports.allEmployees = async (req, res, next) => {
  const pageNumber = +req.query.pageNumber || 1;
  const pageSize = +req.query.pageSize || 8;
  const search = req.query.search || "";
  const department = req.query.department || "";
  const jobTitle = req.query.jobTitle || "";

  const data = await db
    .select({
      ...employeesTable,
      departmentName: departmentsTable.name,
      jobTitleName: jobTitleTable.name,
    })
    .from(employeesTable)
    .leftJoin(
      departmentsTable,
      eq(employeesTable.departmentId, departmentsTable.id)
    )
    .leftJoin(jobTitleTable, eq(employeesTable.jobTitleId, jobTitleTable.id))
    .where(
      and(
        like(employeesTable.fullName, `%${search}%`),
        like(departmentsTable.name, `%${department}%`),
        like(jobTitleTable.name, `%${jobTitle}%`)
      )
    )
    .offset((pageNumber - 1) * pageSize)
    .limit(pageSize);
  res.status(200).json({ data });
};

exports.addEmployee = async (req, res, next) => {
  const data = {
    fullName: req.body.fullName,
    email: req.body.email,
    department: req.body.department,
    jobTitle: req.body.jobTitle,
    phoneNumber: req.body.phoneNumber,
    status: req.body.status,
    createdBy: req.userId,
    departmentId: req.body.departmentId,
    jobTitleId: req.body.jobTitleId,
  };

  try {
    await db.insert(employeesTable).values(data);

    res.status(200).json({ message: "Employee added successfully" });
  } catch (error) {
    const err = new Error("Employee already exist (email or phone number)");
    err.statusCode = 409;
    next(err);
  }
};

exports.editEmployee = async (req, res, next) => {
  const data = {
    fullName: req.body.fullName,
    email: req.body.email,
    department: req.body.department,
    jobTitle: req.body.jobTitle,
    phoneNumber: req.body.phoneNumber,
    status: req.body.status,
    departmentId: req.body.departmentId,
    jobTitleId: req.body.jobTitleId,
    updatedBy: req.userId,
    updatedAt: new Date(),
  };

  try {
    const [query] = await db
      .update(employeesTable)
      .set(data)
      .where(eq(employeesTable.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`Employee with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 409;
    next(err);
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const [query] = await db
      .delete(employeesTable)
      .where(eq(employeesTable.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`Employee with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    const err = new Error(error.message);
    err.statusCode = 409;
    next(err);
  }
};
