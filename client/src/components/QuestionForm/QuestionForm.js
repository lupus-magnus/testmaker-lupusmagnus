import React, { Component } from "react";
import styles from "./QuestionForm.module.css";

class QuestionForm extends Component {
  state = {
    activeQuestion: false,
    currentQuestion: "",
    currentAlternative: "",
    currentAlternativeIsCorrect: false,
    currentQuestionAlternatives: [],
    questions: [],
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
    questionList.push({ description, options });

    console.log(
      `description: ${description}\noptions:${options}\nstate questions: ${questionList}`
    );

    console.log("questionList: ", questionList);
    this.setState({ questions: questionList, activeQuestion: false });
    console.log("Questão inteira adicionada!\n", this.state);
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
    console.log("Current State:\n", this.state);
    const inputs = Array.from(document.querySelectorAll("input"));
    inputs.forEach((input) => (input.value = ""));
    document.querySelector("#checkedCorrect").checked = false;
  };

  render() {
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
                type="text"
                placeholder="Insira a pergunta desta questão"
                onChange={(event) =>
                  this.setState({ currentQuestion: event.target.value })
                }
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  console.log("clicou em adicionar pergunta!");
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
                  //this.questionEndedHandler();
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
