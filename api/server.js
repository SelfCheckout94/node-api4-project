const express = require("express");
const server = express();
const cors = require("cors");
const usersRouter = require("./users/users-router");

server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter);

server.use("*", (req, res) => {
  res.json({
    message: "You have been caught by the catchall.",
  });
});

module.exports = server;
