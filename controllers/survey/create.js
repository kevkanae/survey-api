const getUser = require("../../utils/getUser");
const { userDB, surveyDB } = require("../../database/db");

const createSurvey = (req, res) => {
  const { survey_title, questions } = req.body;

  //Get the Current User from Cookie
  let currentUser = getUser(req, res);
  const userData = userDB
    .prepare("SELECT * FROM users WHERE email = ?")
    .get(currentUser);
  const userID = userData.user_id;

  //Save Survey to DB
  const newSurvey = surveyDB
    .prepare(
      `INSERT INTO survey (survey_title, questions_array, user_id) VALUES (?, ?, ?)`
    )
    .run(survey_title, questions.join("//"), userID);

  res.json({ message: "Questions Created :)" });
};
module.exports = createSurvey;
