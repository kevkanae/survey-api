const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const imageResizer = (res) => {
  // input stream
  const inputImage = path.resolve(__dirname + "/images", "downloadedImage.png");
  let inStream = fs.createReadStream(inputImage);

  // output stream
  const outputImage = path.resolve(__dirname + "/images", "output.png");
  let outStream = fs.createWriteStream(outputImage, { flags: "w" });

  // input stream transformer
  let transform = sharp()
    .resize({ width: 50, height: 50 })
    .on("info", () => {
      console.log("Image Resized, File is Saving...");
    });

  inStream.pipe(transform).pipe(outStream);

  //On Success or Error
  outStream.on("error", () => {
    console.log("Error");
  });
  outStream.on("close", () => {
    console.log("Successfully Saved File");
    res.sendFile(outputImage);
  });
};

module.exports = imageResizer;
