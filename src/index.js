import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./lib/globalStyles";

ReactDOM.render(
  <>
    <App />
    <GlobalStyle />
  </>,
  document.getElementById("root")
);
