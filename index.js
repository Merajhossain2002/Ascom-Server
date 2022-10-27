const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require("./data/courses.json");
const course = require("./data/singleCourse.json");
const premium = require("./data/premium.json");

app.get("/courses", (req, res) => {
  res.send(courses);
});

app.get("/singleCourse/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((c) => c.id == id);
  res.send(selectedCourse);
});

app.get("/checkout/:id", (req, res) => {
  const id = req.params.id;
  const selectedPremium = premium.find((p) => p.id == id);
  res.send(selectedPremium);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
