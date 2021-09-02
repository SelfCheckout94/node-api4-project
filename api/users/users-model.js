const users = require("../../data/data");

module.exports = {
  getAll,
  insert,
  login,
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

function login(loginUser) {
  const foundUser = users.find((user) => {
    return (
      user.username === loginUser.username &&
      user.password === loginUser.password
    );
  });
  return foundUser;
}
