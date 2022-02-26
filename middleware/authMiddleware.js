const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  //Extract Token
  let token;
  if (req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
  }

  //Parse Token
  let decoded;
  try {
    decoded = jwt.verify(token, "This is very Secure HA HA...... ");
  } catch (e) {
    return res.status(401).send("Unauthorized, Login or Sign Up");
  }
  next();
};
module.exports = authMiddleware;
