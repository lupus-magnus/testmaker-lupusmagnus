import styles from "./ErrorPage.module.css";
import thumbsDown from "../../assets/imgs/error.png";

import React, { Component } from "react";

class ErrorPage extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <img
            src={thumbsDown}
            alt="Imagem de polegar para baixo, indicando erro"
            width="300px"
          />
          <h1>Oops, parece que houve um erro!</h1>
          <p>
            Se certifique de que a prova tenha pelo menos uma questão, e que
            todas as questões tenham ao menos uma resposta certa. Nosso time
            lamenta o transtorno.
          </p>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
