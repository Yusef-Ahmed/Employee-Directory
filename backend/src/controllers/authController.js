const { eq } = require("drizzle-orm");
const { db } = require("../db/index");
const { hrsTable } = require("../db/schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res, next) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 12);

  try {
    await db.insert(hrsTable).values({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPassword,
    });

    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    const err = new Error("User already exists");
    err.statusCode = 409;
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const [user] = await db
    .select()
    .from(hrsTable)
    .where(eq(hrsTable.email, req.body.email));

  if (!user) {
    const err = new Error("Email or password is incorrect");
    err.statusCode = 401;
    return next(err);
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!isPasswordValid) {
    const err = new Error("Email or password is incorrect");
    err.statusCode = 401;
    return next(err);
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

  res.status(200).json({ message: "User logged in successfully", token });
};
