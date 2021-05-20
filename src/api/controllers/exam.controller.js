const Exam = require("../models/exam.model");

const examHandler = async (req, res) => {
  await Exam.find({ _id: req.params.id })
    .then((exam) => res.json(exam))
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = examHandler;
