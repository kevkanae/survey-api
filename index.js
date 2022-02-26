//Imports
const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

//Inits
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
};

//Setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

app.get("/", () => {
  res.send("Hello World!");
});

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`);
});
