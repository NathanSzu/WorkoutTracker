const router = require("express").Router();
const Workout = require("../models/Workout.js")

// route to add a workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// route to get all workouts
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true}
  )
    .then(workouts => {
      res.json(workouts);
    })
    .catch(err => {
      res.json(err);
    });
});
router.delete("/api/workouts/", ({body}, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({}).limit(7)
  .then(dbWorkouts => {
    res.json(dbWorkouts)
  })
  .catch(err => {
    res.json(err)
  })
})

module.exports = router;