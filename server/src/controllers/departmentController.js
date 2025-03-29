const db = require("../db/index");
const { departmentsTable, employeesTable } = require("../db/schema");
const { eq, sql } = require("drizzle-orm");

exports.getDepartment = async (_req, res, next) => {
  try {
    const data = await db
      .select({...departmentsTable, count: sql`count(${employeesTable.id})`})
      .from(departmentsTable)
      .leftJoin(
        employeesTable,
        eq(departmentsTable.id, employeesTable.departmentId)
      ).groupBy(departmentsTable.id, departmentsTable.name);

    res.status(200).json({ data });
  } catch (error) {
    const err = new Error(`Departments doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.singleDepartment = async (req, res, next) => {
  try {
    const [data] = await db
      .select()
      .from(departmentsTable)
      .where(eq(departmentsTable.id, req.params.id));

    res.status(200).json({ data });
  } catch (error) {
    const err = new Error(`Departments doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.addDepartment = async (req, res, next) => {
  try {
    await db.insert(departmentsTable).values({ name: req.body.name });

    res.status(200).json({
      message: `Departments ${req.body.name} added successfully`,
    });
  } catch {
    const err = new Error(`Departments already exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.editDepartment = async (req, res, next) => {
  try {
    const [query] = await db
      .update(departmentsTable)
      .set({ name: req.body.name })
      .where(eq(departmentsTable.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`Department with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({
      message: `Department updated to ${req.body.name} successfully`,
    });
  } catch {
    const err = new Error(`Department with id ${req.body.id} doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.deleteDepartment = async (req, res, next) => {
  try {
    const [query] = await db
      .delete(departmentsTable)
      .where(eq(departmentsTable.id, req.body.id));
    if (!query.affectedRows) {
      const err = new Error(`Department with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({
      message: `Department deleted successfully`,
    });
  } catch {
    const err = new Error("There is users assigned to this department");
    err.statusCode = 409;
    next(err);
  }
};
