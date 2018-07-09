import React from "react";
import ReactDOM from "react-dom";
import InputArea from "./InputValue";
import ViewLabel from "./ViewCompornent";

// var data = { str: 12345 };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      str: "hello world"
    };

    this.valueChanged = this.valueChanged.bind(this);
  }

  valueChanged(resStr) {
    this.setState({
      str: resStr
    });
  }

  render() {
    return (
      <div>
        <ViewLabel value={this.state.str} />
        <InputArea valueChanged={this.valueChanged} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
