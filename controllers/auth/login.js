const { userDB } = require("../../database/db");
const jwtToken = require("../../utils/jwt");
const sendToken = require("../../utils/sendToken");

const login = (req, res) => {
  const { email, password } = req.body;

  //Check if User Exists
  const user = userDB.prepare("SELECT * FROM users WHERE email = ?").get(email);
  if (!user) {
    res.json({ Status: "User Not Found, Please Sign Up" });
  } else {
    // User Found, Check Password
    if (password == user.password) {
      sendToken(res, jwtToken(email), "Login Successful");
    } else {
      res.json({ Status: "Incorrect Password" });
    }
  }
};
module.exports = login;
