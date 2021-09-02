const express = require("express");

const Users = require("./users-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.getAll(req.query);
    res.status(200).json(users);
  } catch (err) {
    next;
  }
});

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    custom: "Something went wrong with the user router.",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
