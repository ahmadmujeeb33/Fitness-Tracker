  
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: String,
        trim: true,
        required: "String is Required"
    },
    exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Please specify type of exercise."
          },
          name: {
            type: String,
            trim: true,
            required: "What is the name of this exercise?"
          },
          duration: {
            type: Number,
            required: "How long is this exercise?"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
});

const workout = mongoose.model("workout", WorkoutSchema);

module.exports = workout;