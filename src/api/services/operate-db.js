const Exam = require("../models/exam.model");

const findExamById = async (req, res) => {
  await Exam.find({ _id: req.params.id })
    .then((exam) => res.json(exam))
    .catch((err) => res.status(400).json("Error: " + err));
};

const saveNewExam = async (newExamRegister, res) => {
  const newExam = new Exam(newExamRegister);
  await newExam
    .save()
    .then(() =>
      res.json({
        msg: "A prova foi adicionada ao nosso banco de dados!",
        examUrl: newExamRegister.examUrl,
      })
    )
    .catch((err) => res.json({ msg: "error", err_type: err.message }));
};

module.exports = { findExamById, saveNewExam };
