const users = require("../../data/data");

module.exports = {
  getAll,
  insert,
};

function getAll() {
  return users;
}

function insert(newUser) {
  return users.push({
    ...newUser,
    id: users.length + 1,
  });
}
