import React, { Component } from "react";
import styles from "./Exam.module.css";
import api from "../../services/api";
const alphabet = require("../../helpers/alphabet");

class Exam extends Component {
  state = {
    exam: "",
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    console.log("ID received via path:", id, "\ntype:", typeof id);

    //Estou concatenando com o objeto api construido no service.
    api
      .get(id)
      .then((res) => {
        console.log(res.data);
        const fetchedExam = res.data[0];
        this.setState({ exam: fetchedExam });
        console.log("State:", this.state);
      })
      .catch((err) => console.log("There was an error: \n", err));
  }

  render() {
    const { title, questions } = this.state.exam;

    return this.state.exam ? (
      <div className={styles.examContainer}>
        <h1>{title}</h1>
        <ol className={styles.questionStyles}>
          {questions.map((question) => {
            const options = question.questionData.options;

            const alternativesSection = options.map((option) => {
              return (
                <p key={options.indexOf(option)}>
                  <strong>
                    {alphabet[options.indexOf(option)]}
                    {")   "}
                  </strong>{" "}
                  {option.text}
                </p>
              );
            });

            return (
              <li key={question._id}>
                {questions.indexOf(question) + 1}
                {")   "}
                {question.questionData.description}
                <div className={styles.alternativesSection}>
                  {alternativesSection}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    ) : (
      <h1>Sua prova aparecerá aqui...</h1>
    );
  }
}

export default Exam;
