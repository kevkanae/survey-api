const { userDB } = require("../../database/db");
const jwtToken = require("../../utils/jwt");
const sendToken = require("../../utils/sendToken");

const register = (req, res) => {
  const { email, password } = req.body;

  //Check is User Exists
  const user = userDB.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user) {
    //Insert to DB
    const newUser = userDB
      .prepare(`INSERT INTO users (email, password) VALUES (?, ?)`)
      .run(email, password);
    sendToken(res, jwtToken(email), "Registration Successful");
  } else res.json({ Status: "User Exists, Please Login" });
};
module.exports = register;
