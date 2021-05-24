const Exam = require("../models/exam.model");
const { saveNewExam } = require("../services/operate-db");
const validateExam = require("../services/validate-exam");

const addExamHandler = async (req, res) => {
  const { title, questions } = req.body;
  const newExamId = new Date().getTime(); //Estou usando como ID para as provas uma timestamp unica.

  let newExamRegister = {
    _id: Number(newExamId),
    title,
    questions,
    examUrl: `${process.env.BASE_URL_ADRESS}/exams/${newExamId}`,
  };

  console.log("newExamRegister:", newExamRegister);
  const didExamPass = await validateExam(newExamRegister);
  console.log("didExamPass:", didExamPass);
  if (didExamPass) {
    await saveNewExam(newExamRegister, res);
  } else {
    res.send("Algo não deu certo, blz?");
  }
};

module.exports = addExamHandler;
