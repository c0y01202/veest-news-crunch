const { User } = require("../models");

const userData = [
  {
    username: "Claudia",
    password: "Acorn",
  },
  {
    username: "Valerie",
    password: "Unknown",
  },
  {
    username: "Amber",
    password: "Heard",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
