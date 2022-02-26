const fs = require("fs");
const path = require("path");
const axios = require("axios");
const imageResizer = require("./resizer");

const downloadImage = async (url, res) => {
  const localFilePath = path.resolve(
    __dirname + "/images",
    "downloadedImage.png"
  );
  try {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "stream",
    });

    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on("finish", () => {
      console.log("Successfully Downloaded");
      imageResizer(res);
    });
  } catch (err) {
    throw new Error(err);
  }
};
module.exports = downloadImage;
