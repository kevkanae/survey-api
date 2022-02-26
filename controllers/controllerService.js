const login = require("./auth/login");
const register = require("./auth/register");
const createSurvey = require("./survey/create");
const takeSurvey = require("./survey/take");
const getSurvey = require("./survey/get");
const generateImage = require("./imgGenerator/imgGenerator");

const controller = {
  Login: login,
  Register: register,
  CreateSurvey: createSurvey,
  TakeSurvey: takeSurvey,
  GetSurvey: getSurvey,
  ThumbnailGenerator: generateImage,
};
module.exports = controller;
