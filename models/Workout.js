const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date
    },
    exercises: {
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }

})


WorkoutSchema.virtual('totalDuration').get(function () {
    // “reduce” array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;