import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";

//mock datas
import { routes } from "./mocks/mockdatas";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {routes.map((route, i) => (
        <Route exact path={route.path} key={i}>
          <App content={route.component} />
        </Route>
      ))}
      <Route path={"*"}>
        <div>PAGE_NOT_FOUND</div>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
