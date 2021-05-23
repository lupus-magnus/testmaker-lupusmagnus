import React, { Component } from "react";
import { TestForm, Exam, ErrorPage } from "./components";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    response: "",
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then((res) => this.setState({ response: res.express }))
  //     .catch((err) => console.log(err));
  // }

  // callApi = async () => {
  //   const response = await fetch("/api/mensagem");
  //   const body = await response.json();
  //   console.log(body);
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };

  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Route path="/" exact component={TestForm} />
          <Route path="/exam/:id" component={Exam} />
          <Route path="/error" component={ErrorPage} />
        </div>
      </Router>
    );
  }
}

export default App;
