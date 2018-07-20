import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {observer} from 'mobx-react';
import Button from '@material-ui/core/Button';

const styles = theme => ({

});

@observer
class InputValue extends React.Component{
   
   constructor(props){
      super(props);

   }

   render(){
      return (
         <Button variant="contained" onClick={() => this.props.store.eventHandle('unko')}>
            ポッチとな！
         </Button>
      );
    }
}

export default withStyles(styles)(InputValue);