const userDB = require("better-sqlite3")("user.db");
const surveyDB = require("better-sqlite3")("survey.db");

module.exports = {
  userDB,
  surveyDB,
};
