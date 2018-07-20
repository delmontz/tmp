import React from 'react';
import ReactDOM from 'react-dom';
import DataStore from './mobx_test_store'
import Input from './mobx_test_input'
import View from './mobx_test_view'

var state = {str: 12345};
const myStore = new DataStore();

ReactDOM.render(
  <div>
    <Input store={myStore}/>
    <View store={myStore}/>
  </div>
  ,
  document.getElementById('app')
);
