const db = require("../db/index");
const { departmentsTable, jobTitleTable } = require("../db/schema");
const { eq } = require("drizzle-orm");

const getTableAndType = (type) => {
  const isDepartment = type == "department";
  return {
    table: isDepartment ? departmentsTable : jobTitleTable,
    label: isDepartment ? "Department" : "Job title",
  };
};

exports.getOrganization = async (req, res, next) => {
  const { table } = getTableAndType(req.params.type);

  try {
    const data = await db.select().from(table);

    res.status(200).json({ data });
  } catch {
    const err = new Error(`${label} doesn't exists`);
    err.statusCode = 409;
    next(err);
  }
};

exports.addOrganization = async (req, res, next) => {
  const { table, label } = getTableAndType(req.params.type);

  try {
    await db.insert(table).values({ name: req.body.name });

    res.status(200).json({
      message: `${label} ${req.body.name} added successfully`,
    });
  } catch {
    const err = new Error(`${label} already exists`);
    err.statusCode = 409;
    next(err);
  }
};

exports.editOrganization = async (req, res, next) => {
  const { table, label } = getTableAndType(req.params.type);

  try {
    const [query] = await db
      .update(table)
      .set({ name: req.body.name })
      .where(eq(table.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`${label} with id ${req.body.id} doesn't exists`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({
      message: `${label} updated to ${req.body.name} successfully`,
    });
  } catch {
    const err = new Error(`${label} with id ${req.body.id} doesn't exists`);
    err.statusCode = 409;
    next(err);
  }
};

exports.deleteOrganization = async (req, res, next) => {
  const { table, label } = getTableAndType(req.params.type);

  try {
    const [query] = await db.delete(table).where(eq(table.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`${label} with id ${req.body.id} doesn't exists`);
      err.statusCode = 409;
      throw err;
    }
    
    res.status(200).json({
      message: `${label} deleted successfully`,
    });
  } catch {
    const err = new Error(`${label} with id ${req.body.id} doesn't exists`);
    err.statusCode = 409;
    next(err);
  }
};
