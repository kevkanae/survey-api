### API Documentation: https://documenter.getpostman.com/view/15003967/UVkqqZXE

### SQLite Schema:

#### 1. User DB

````CREATE TABLE "users" (
  "user_id"	INTEGER NOT NULL,
  "email"	TEXT,
  "password"	TEXT,
  PRIMARY KEY("user_id" AUTOINCREMENT)
)```

#### 2. Survey DB
```CREATE TABLE "survey" (
  "survey_id"	INTEGER NOT NULL,
  "survey_title"	TEXT NOT NULL,
  "questions_array"	TEXT NOT NULL,
  "user_id"	INTEGER NOT NULL,
  PRIMARY KEY("survey_id")
)```

```CREATE TABLE "survey_answers" (
  "answer_id"	INTEGER NOT NULL,
  "survey_id"	INTEGER NOT NULL,
  "user_id"	INTEGER NOT NULL,
  "answer_array"	TEXT NOT NULL,
  PRIMARY KEY("answer_id" AUTOINCREMENT),
  FOREIGN KEY("survey_id") REFERENCES "survey"("survey_id")
)```
````
