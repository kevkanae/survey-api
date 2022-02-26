const sendToken = (res, token, message) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + 1 * 24 * 60 * 60 * 1000 // 1day*24hours*60min*60s*1000ms*
    ),
    secure: false,
    httpOnly: false,
  };

  res.cookie("Coookiieee", token, cookieOptions);
  res.json({
    status: message,
    token: token,
  });
};

module.exports = sendToken;
