const validateExam = async (examObj) => {
  console.log("Uma prova chegou até o validador!");
  const { title, questions } = await examObj;
  let anyError = false;

  if (!title) {
    console.log("Prova reprovada. A prova não possui titulo.");
    anyError = true;
  }
  if (questions.length < 1) {
    console.log("Prova reprovada. Não possui questões.");
    anyError = true;
  }

  questions.forEach((question) => {
    console.log("question arrived in questionsforeach:", question);
    let options = question.questionData.options;
    console.log("options in forEach:", options);
    let valueArray = [];
    options.forEach((option) => {
      valueArray.push(option.value);
    });
    console.log("valueArray: ", valueArray);
    if (
      !valueArray.some((value) => {
        return value == true;
      })
    ) {
      anyError = true;
      console.log(
        "Prova reprovada. Pelo menos uma questão não possui alternativa correta."
      );
    }
    console.log("anyError:", anyError);
    if (!anyError) {
      return true;
    } else {
      return false;
    }
  });

  return !anyError;
};

module.exports = validateExam;
