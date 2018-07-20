import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {observer} from 'mobx-react';

const styles = theme => ({

});

@observer
class ViewComponent extends React.Component{
   
   constructor(props){
      super(props);
   }

   render(){
      return (
        <div>
          <Paper>
              {this.props.store.str}
          </Paper>
        </div>
       );
   }

}

export default withStyles(styles)(ViewComponent);