import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FormFactory from "./pages/FormFactory";

ReactDOM.render(
  <BrowserRouter basename="intern/pdf-generator/build">
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>

      <Route path="/form">
        <FormFactory></FormFactory>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
