const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/new", (req, res) => {
  res.send("User new form");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`The id: ${req.params.id}`);
  })
  .post((req, res) => {
    req.params.id;
    res.send(`The id: ${req.params.id}`);
  });

const users = [{ name: "Kyle" }, { name: "Sally" }];

router.param("id", (req, res, next, id) => {
  req.user = users[id];
  console.log(id);
  next();
});

module.exports = router;
