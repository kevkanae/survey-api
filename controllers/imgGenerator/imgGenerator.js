const downloadImage = require("../../utils/downloadImage");

const generateImage = (req, res) => {
  const { url } = req.body;

  //Download Image
  downloadImage(url, res);
};
module.exports = generateImage;
