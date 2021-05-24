import React, { Component } from "react";
import styles from "./QuestionForm.module.css";
import api from "../../services/api";
import { Redirect } from "react-router-dom";

class QuestionForm extends Component {
  state = {
    activeQuestion: false,
    questionNumber: 1,
    currentQuestion: "",
    currentAlternative: "",
    currentAlternativeIsCorrect: false,
    currentQuestionAlternatives: [],
    questions: [],
    redirect: null,

    //Para enviar a prova!
    exam: {},
  };

  questionAddedHandler = () => {
    this.setState({ activeQuestion: true });
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((input) => (input.value = ""));
  };
  questionEndedHandler = () => {
    const {
      currentQuestion: description,
      currentQuestionAlternatives: options,
    } = this.state;

    let questionList = this.state.questions;
    questionList.push({
      questionNumber: this.state.questionNumber,
      questionData: { description, options },
    });

    console.log("questionList: ", questionList);
    this.setState({
      questions: questionList,
      currentQuestionAlternatives: [],
      activeQuestion: false,
      questionNumber: this.state.questionNumber + 1,
    });
    console.log(
      "Questão inteira adicionada!\nLista de questões:",
      this.state.questions
    );
  };

  alternativeAddedHandler = () => {
    const isCorrect = document.querySelector("#checkedCorrect").checked
      ? true
      : false;
    const { currentAlternative } = this.state;

    let newAlternative = { text: currentAlternative, value: isCorrect };

    let currentAlternatives = this.state.currentQuestionAlternatives;
    currentAlternatives.push(newAlternative);

    this.setState({
      currentQuestionAlternatives: currentAlternatives,
    });

    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((input) => (input.value = ""));
    document.querySelector("#checkedCorrect").checked = false;
  };

  postExamHandler = async () => {
    const examReadyToSubmitObject = {
      title: this.props.title,
      questions: this.state.questions,
    };
    console.log("examReadyToSubmit: ", examReadyToSubmitObject);
    const examReadyToSubmitJSON = JSON.stringify(examReadyToSubmitObject);
    console.log("Our exam in JSON: ", examReadyToSubmitJSON);
    await api
      .post("add", examReadyToSubmitObject)
      .then(async (response) => {
        //Redirecting:
        const getExamRoute = await response.data.id;
        if (getExamRoute) {
          console.log(getExamRoute);
          console.log("Sucesso! Colocamos no banco de dados!");
          this.setState({ redirect: `/exam/${getExamRoute}` });
        } else {
          this.setState({ redirect: `/error` });
        }
      })

      .catch((err) => this.setState({ redirect: `/error` }));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className={styles.questionForm}>
        <form>
          {this.state.activeQuestion ? (
            <React.Fragment>
              <input
                type="text"
                placeholder="Insira a próxima alternativa"
                onChange={(e) =>
                  this.setState({ currentAlternative: e.target.value })
                }
              />
              <fieldset>
                <input
                  id="checkedCorrect"
                  type="radio"
                  name="gender"
                  value="male"
                />
                <label htmlFor="True">Resposta correta</label>
              </fieldset>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  this.alternativeAddedHandler();
                  //Aqui devemos adicionar a alternativa e se ela tá correta no estado.
                }}
                className={styles.green}
                type="submit"
              >
                Adicionar alternativa
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("clicou em finalizar questão!");
                  this.questionEndedHandler();
                  e.target.value = "";
                }}
                className={styles.red}
              >
                Finalizar questão
              </button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input
                autofocus="true"
                type="text"
                placeholder="Insira a pergunta desta questão"
                onChange={(event) =>
                  this.setState({ currentQuestion: event.target.value })
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("clicou em adicionar questão!");
                  this.questionAddedHandler();
                  e.target.value = "";
                }}
                className={styles.green}
                type="submit"
              >
                Adicionar questão
              </button>
              <button
                className={styles.red}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("clicou em finalizar prova!");
                  this.postExamHandler();
                  e.target.value = "";
                }}
              >
                Finalizar prova
              </button>
            </React.Fragment>
          )}
        </form>
      </div>
    );
  }
}

export default QuestionForm;
