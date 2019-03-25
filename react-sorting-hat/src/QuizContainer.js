import React from "react";

class QuizContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      questions: [],

      responses: []
    };
  }

  render() {
    return <div className="QuizContainer">{this.props.tally.hufflepuff}</div>;
  }
}

export default QuizContainer;
