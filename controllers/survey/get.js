const getUser = require("../../utils/getUser");
const { userDB, surveyDB } = require("../../database/db");

const getSurvey = (req, res) => {
  const { survey_title } = req.body;

  // Get the Current User from Cookie
  let currentUser = getUser(req, res);
  const userData = userDB
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(currentUser);
  const userID = userData.user_id;

  // Get SurveyID from survey_title
  const surveyData = surveyDB
    .prepare("SELECT * FROM survey WHERE survey_title = ?")
    .get(survey_title);
  if (!surveyData) {
    res.json({ status: "Survey Doesnt Exist" });
  }
  const surveyID = surveyData.survey_id;
  const surveyQuestions = surveyData.questions_array;

  // Get Survey Answers
  const surveyAnswersData = surveyDB
    .prepare("SELECT * FROM survey_answers WHERE survey_id = ? AND user_id = ?")
    .get(surveyID, userID);
  if (!surveyAnswersData) {
    res.json({ status: "Survey Doesnt have any Answers" });
  }
  const surveyAnswers = surveyAnswersData.answer_array;

  // Beautify JSON
  let qArray = surveyQuestions.split("//");
  let aArray = surveyAnswers.split("//");

  let tempArray = qArray.map((x) => {
    return {
      Q: x,
    };
  });

  let finalArray = aArray.map((y, j) => {
    return { ...tempArray[j], A: y };
  });

  res.json({
    Message: "Survey Retrieved",
    Title: survey_title,
    Data: finalArray,
  });
};
module.exports = getSurvey;
