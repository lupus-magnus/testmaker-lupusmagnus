const Exam = require("../models/exam.model");
const { findExamById } = require("../services/operate-db");

const examHandler = async (req, res) => {
  await findExamById(req, res).catch((err) => console.log(err));
};

module.exports = examHandler;
