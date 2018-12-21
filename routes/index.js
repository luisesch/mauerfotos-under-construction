const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/ueber", (req, res, next) => {
  res.render("ueber");
});

router.get("/fotograf", (req, res, next) => {
  res.render("fotograf");
});

module.exports = router;
