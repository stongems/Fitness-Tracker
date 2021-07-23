const router = require("express").Router();
const db = require("../models");
router.get("/api/workouts", (req, res) => {
  db.Workout.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } 
      }
    } 
 ] ).then((data) => {
    res.json(data);
  });
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body).then((data) => {
    res.json(data);
  });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
    db.Workout.updateOne(
    { _id: req.params.id },
    // $push is a mongoose function to push data into an array 
    { $push: { exercises: req.body } }
  ).then((data) => {
    res.json(data);
  });
});

router.get("/api/workouts/range", (req, res) => {
    console.log("stats")
  db.Workout.aggregate( [
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } 
      }
    } 
 ] ).then((data) => {
    res.json(data);
  });
});

module.exports = router;
