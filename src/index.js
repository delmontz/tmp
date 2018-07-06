import React from "react";
import ReactDOM from "react-dom";
import InputArea from "./InputValue";
import ViewLabel from "./ViewCompornent";

var data = { str: 12345 };

ReactDOM.render(
  <div>
    <ViewLabel value={data} />
    <InputArea value={data} />
  </div>,
  document.getElementById("root")
);
