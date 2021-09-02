const express = require("express");
const server = express();
const cors = require("cors");
const usersRouter = require("./users/users-router");
const path = require("path");

server.use(express.json());
server.use(cors());
server.use(
  express.static(path.join(__dirname, "super-simple-front-end/build"))
);

server.use("/api", usersRouter);

server.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "super-simple-front-end/build", "index.html")
  );
});

module.exports = server;
