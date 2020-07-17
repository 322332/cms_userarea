import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { store } from "./State/store";

import RoutingTable from "./RoutingTable";

ReactDOM.render(
  <Provider store={store}>
    <RoutingTable />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
