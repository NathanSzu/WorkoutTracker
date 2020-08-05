const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');
const Workout = require('./models/Workout.js')
const router = require('express').Router();

const PORT = process.env.PORT || 3001;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require('./routes/api-routes.js'));
app.use(require('./routes/html-routes.js'));

// app.get('/api/workouts/range', (req, res) => {
//   Workout.find({}).limit(7)
//   .then(dbWorkouts => {
//     res.json(dbWorkouts)
//   })
//   .catch(err => {
//     res.json(err)
//   })
// })

// app.get('/api/workouts', (req, res) => {
//   Workout.find({})
//   .then(dbWorkout => {
//     res.json(dbWorkout);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.post("/api/workouts", function(req, res) {
//   Workout.create({})
//     .then(function(dbWorkout) {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });

// });

// app.put("/api/workouts/:id", ({ body, params}, res) => {
//   Workout.findByIdAndUpdate(
//     params.id,
//     {$push: {exercises: body}},
//     {new: true, runValidators: true}
//   )
//   .then(workouts => {
//     res.json(workouts);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

// app.delete('/api/workouts/', ({body}, res) => {
//   Workout.findByIdAndDelete(body.id)
//     .then(() => {
//       res.json(true);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// // HTML Routes
// app.get('/exercise', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/exercise.html'))
// })

// app.get('/stats', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/stats.html'))
// })

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/index.html'))
// })




app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });