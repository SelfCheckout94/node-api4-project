const users = require("../../data/data");

module.exports = {
  getAll,
};

function getAll() {
  return users;
}
