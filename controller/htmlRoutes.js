const router = require('express').Router();
const path = require("path");
const htmlRoutes = require('./htmlRoutes');

router.get("/", (req, res) => {
    // path.join(__dirname located the file "public"
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

  module.exports = router