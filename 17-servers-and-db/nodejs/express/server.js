// https://www.youtube.com/watch?v=SccSCuHhOw0

const express = require("express");
const app = express();

app.set("view engine", "ejs");
// app.use(logger);

app.use(express.static("public"));

app.get("/", logger, (req, res) => {
  console.log("Here");
  res.render("index", { text: "some text" });
});

app.get("/static", (req, res) => {});

const userRouter = require("./routes/users");

app.use("/user", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl, "Logged");
  next();
}

app.listen(3000);
