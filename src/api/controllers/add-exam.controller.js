const Exam = require("../models/exam.model");

const addExamHandler = async (req, res) => {
  const { title, questions } = req.body;
  const newExamId = new Date().getTime(); //Estou usando como ID para as provas uma timestamp unica.

  let newExamRegister = {
    _id: Number(newExamId),
    title,
    questions,
    examUrl: `${process.env.BASE_URL_ADRESS}/${newExamId}`,
  };

  console.log("newExamRegister:", newExamRegister);

  const newExam = new Exam(newExamRegister);
  await newExam
    .save()
    .then(() =>
      res.json({
        msg: "A prova foi adicionada ao nosso banco de dados!",
        examUrl: newExamRegister.examUrl,
      })
    )
    .catch((err) => res.status(400).json("Error: " + err));
};

module.exports = addExamHandler;
