import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({});

class InputValue extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.valueChanged(e.target.value);
  }

  render() {
    return (
      <TextField label={"入力してください"} onChange={this.handleChange} />
    );
  }
}

export default withStyles(styles)(InputValue);
