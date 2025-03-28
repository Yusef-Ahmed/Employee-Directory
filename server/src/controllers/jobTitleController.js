const db = require("../db/index");
const { jobTitleTable } = require("../db/schema");
const { eq } = require("drizzle-orm");

exports.getJobTitle = async (_req, res, next) => {
  try {
    const data = await db.select().from(jobTitleTable);

    res.status(200).json({ data });
  } catch {
    const err = new Error(`Job title doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.addJobTitle = async (req, res, next) => {
  try {
    await db.insert(jobTitleTable).values({ name: req.body.name });

    res.status(200).json({
      message: `Job title ${req.body.name} added successfully`,
    });
  } catch {
    const err = new Error(`Job title already exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.editJobTitle = async (req, res, next) => {
  try {
    const [query] = await db
      .update(jobTitleTable)
      .set({ name: req.body.name })
      .where(eq(jobTitleTable.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`Job title with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({
      message: `Job title updated to ${req.body.name} successfully`,
    });
  } catch {
    const err = new Error(`Job title with id ${req.body.id} doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};

exports.deleteJobTitle = async (req, res, next) => {
  try {
    const [query] = await db
      .delete(jobTitleTable)
      .where(eq(jobTitleTable.id, req.body.id));

    if (!query.affectedRows) {
      const err = new Error(`Job title with id ${req.body.id} doesn't exist`);
      err.statusCode = 409;
      throw err;
    }

    res.status(200).json({
      message: `Job title deleted successfully`,
    });
  } catch {
    const err = new Error(`Job title with id ${req.body.id} doesn't exist`);
    err.statusCode = 409;
    next(err);
  }
};
