import React, { Component } from "react";

import QuizContainer from "./QuizContainer";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tally: {
        gryffindor: 0,
        hufflepuff: 0,
        ravenclaw: 0,
        slytherin: 0
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <QuizContainer tally={this.state.tally} />
      </div>
    );
  }
}

export default App;
