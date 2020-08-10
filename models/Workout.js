const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: () => new Date },
    exercises: [
      {
        type: { type: String, required: "add an exercise type", trim: true },
        name: { type: String, required: "add an exercise name", trim: true },
        duration: { type: Number, required: "add a duration" },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number },
        distance: { type: Number }
      }
    ]
  }
);


WorkoutSchema.virtual('totalDuration').get(function () {
  // “reduce” array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;