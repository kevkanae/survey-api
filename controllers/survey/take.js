const getUser = require("../../utils/getUser");
const { userDB, surveyDB } = require("../../database/db");

const takeSurvey = (req, res) => {
  const { survey_title, answers } = req.body;

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

  //Length of Answer Array == Question Array
  if (answers.length <= surveyData.questions_array.length) {
    res.json({ status: "Missing one or more Answers" });
  } else if (answers.length >= surveyData.questions_array.length) {
    res.json({ status: "Added one or more EXTRA Answers" });
  }

  // Save Survey Answers to DB
  const addAnswers = surveyDB
    .prepare(
      `INSERT INTO survey_answers (survey_id, user_id, answer_array) VALUES (?, ?, ?)`
    )
    .run(surveyID, userID, answers.join("//"));

  res.json({ message: "Answers Recorded :)" });
};
module.exports = takeSurvey;
