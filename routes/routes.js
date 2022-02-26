const express = require("express");
const controller = require("../controllers/controllerService");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", controller.Login);
router.post("/register", controller.Register);

//Protected Routes
router.post("/create", authMiddleware, controller.CreateSurvey);
router.post("/take", authMiddleware, controller.TakeSurvey);
router.get("/get", authMiddleware, controller.GetSurvey);

//Resize and Generate Image
router.post("/resize", authMiddleware, controller.ThumbnailGenerator);

module.exports = router;
