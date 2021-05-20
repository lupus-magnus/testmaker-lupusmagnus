import React, { Component } from "react";
import styles from "./TestForm.module.css";

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", questions: [], emptyTitle: true };
  }
  myChangeHandler = (event) => {
    this.setState({ title: event.target.value });
  };

  titleReadyHandler = () => {
    this.setState({ emptyTitle: false });
  };

  render() {
    return (
      <div className={styles.mainPage}>
        {this.state.emptyTitle ? ( //Se ainda nao temos o titulo da prova:
          <div className={styles.formDiv}>
            <form>
              <h1>{this.state.title}</h1>

              <p>Titulo da Prova:</p>

              <input type="text" onChange={this.myChangeHandler} />
              <button type="button" onClick={this.titleReadyHandler}>
                ok
              </button>
            </form>
          </div>
        ) : (
          //Se ja temos o titulo da prova:
          <div className={styles.formDiv}>
            <h1>Aqui são as questões</h1>
          </div>
        )}
        <div className={styles.previewSection}>
          {this.state.emptyTitle === false && <h1>{this.state.title}</h1>}
          {this.state.questions.length > 0 &&
            this.state.questions.map((item) => <p>{item}</p>)}
        </div>
      </div>
    );
  }
}

export default TestForm;
