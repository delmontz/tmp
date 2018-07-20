import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

});

class InputValue extends React.Component{
   
   constructor(props){
      super(props);
   }

   render(){
      return (
        <TextField
          label="入力してください"
          onChange={(e)=>{
            console.log(e.target.value);
            this.props.state.str = e.target.value;
            this.setState(this.state);
          }}
        />
      );
    }
}

export default withStyles(styles)(InputValue);