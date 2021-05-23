const router = require("express").Router();

const addExamHandler = require("../api/controllers/add-exam.controller");
const examHandler = require("../api/controllers/exam.controller");

//Meu modelo de prova
//const Exam = require("../api/models/exam.model");

//Minhas rotas
router.route("/:id").get(examHandler);
router.route("/add").post(addExamHandler);

module.exports = router;
