import React, { Component } from "react";
import { TestForm } from "./components";
import styles from "./App.module.css";

class App extends Component {
  state = {
    response: "",
  };

  componentDidMount() {
    this.callApi()
      .then((res) => this.setState({ response: res.express }))
      .catch((err) => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/mensagem");
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div class={styles.app}>
        <TestForm />
      </div>
    );
  }
}

export default App;
