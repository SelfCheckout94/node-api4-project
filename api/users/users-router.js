const express = require("express");

const Users = require("./users-model");

const router = express.Router();

router.get("/users", async (req, res, next) => {
  try {
    const users = await Users.getAll(req.query);
    res.status(200).json(users);
  } catch (err) {
    next;
  }
});

router.post("/register", async (req, res, next) => {
  const { body } = req;
  try {
    await Users.insert(body);
    if (!body.username || !body.password) {
      res.status(400).json({
        message: "A username and password are required",
      });
    } else {
      res.status(201).json(body);
    }
  } catch (err) {
    next;
  }
});

router.post("/login", async (req, res, next) => {
  const { body } = req;
  try {
    if (!body.username || !body.password) {
      res.status(400).json({
        message: "A username and password are required",
      });
    } else {
      await Users.login(body);
      res.status(200).json({
        message:
          "Welcome to the greatest but most flawed backend you have ever seen",
      });
    }
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
