const express = require("express");
const server = express();
const cors = require("cors");
const usersRouter = require("./users/users-router");
const path = require("path");

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, "client/build")));

server.use("/api", usersRouter);

server.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = server;
