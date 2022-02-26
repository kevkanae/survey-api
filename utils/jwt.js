const jwt = require("jsonwebtoken");

const jwtToken = (email) => {
  return jwt.sign(
    {
      email,
    },
    "This is very Secure HA HA...... ",
    {
      expiresIn: "1d",
    }
  );
};
module.exports = jwtToken;
