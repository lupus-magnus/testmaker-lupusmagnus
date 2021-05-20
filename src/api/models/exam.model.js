const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const examSchema = new Schema(
  {
    _id: Number,
    title: String,
    testUrl: String,
    questions: [
      {
        questionNumber: Number,

        questionData: {
          description: String,
          options: Schema.Types.Mixed,
        },
      },
    ],
  },
  { versionKey: false }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
