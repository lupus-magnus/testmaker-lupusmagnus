import React, { Component } from "react";
import styles from "./TestForm.module.css";
import logo from "../../assets/imgs/lupus-logo.png";
import QuestionForm from "../QuestionForm/QuestionForm";

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      questions: [],
      emptyTitle: true,
      anyActiveQuestion: false,
      activeQuestionTitle: "",
      activeQuestionOptions: {},
    };
  }

  myChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  titleReadyHandler = () => {
    this.setState({ emptyTitle: false });
  };

  onKeyDownHandler = (event) => {
    if (event.keyCode === 13) {
      this.titleReadyHandler();
    }
  };

  questionTitleSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      anyActiveQuestion: true,
      activeQuestionTitle: { title: event.target.value },
    });
  };

  render() {
    return (
      <div className={styles.mainPage}>
        {this.state.emptyTitle ? ( //Se ainda nao temos o titulo da prova:
          <div className={styles.formDiv}>
            <form>
              <p>Titulo da Prova:</p>

              <div className={styles.inputField}>
                <input
                  autofocus="true"
                  required
                  onKeyDown={this.onKeyDownHandler}
                  onChange={(event) =>
                    this.setState({ title: event.target.value })
                  }
                  placeholder={"Titulo da Prova"}
                  className={styles.input}
                />
                <div
                  onClick={() => {
                    this.titleReadyHandler();
                  }}
                  className={styles.Btn}
                >
                  {" "}
                  ok{" "}
                </div>
              </div>
            </form>
          </div>
        ) : (
          //Se ja temos o titulo da prova:
          <div className={styles.formDiv}>
            <QuestionForm title={this.state.title} />
          </div>
        )}
        <div className={styles.previewSection}>
          {this.state.emptyTitle === false && <h1>{this.state.title}</h1>}
          {this.state.questions.length > 0 &&
            this.state.questions.map((item) => <p>{item}</p>)}
          <img className={styles.logo} src={logo} alt="lupus-magnus logo" />
        </div>
      </div>
    );
  }
}

export default TestForm;
