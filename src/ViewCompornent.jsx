import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({});

class ViewComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Paper>{this.props.value}</Paper>
      </div>
    );
  }
}

export default withStyles(styles)(ViewComponent);
