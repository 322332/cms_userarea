import React, { useEffect, useState } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import App from "./App";

var hist = createBrowserHistory();

export default function RoutingTable() {
  const dispatch = useDispatch();

  const [layout, setLayout] = useState([]);


  const [isloading, setIsLoading] = useState(true);

  

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/pageLayout/getAllPages", {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NWYwZjE4ZGNhYjg2M2MxNjRjY2NhMDli.iWlsLCWqNMF_NjjMBwOHpfS_NWKs4B87NAjK6v_T2F8",
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => {
        setLayout(data);
        setIsLoading(!isloading);
      })
      .catch((err) => {
        console.error(err);
      });

    fetch("http://127.0.0.1:3000/api/components", {
      method: "POST",
      headers: {
        "auth-token":
          "eyJhbGciOiJIUzI1NiJ9.NWYwZjE4ZGNhYjg2M2MxNjRjY2NhMDli.iWlsLCWqNMF_NjjMBwOHpfS_NWKs4B87NAjK6v_T2F8",
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_COMPONENTS", payload: data }))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (isloading === true) {
    return (
      <center>
        <Spinner animation="grow" />
      </center>
    );
  }
  return (
    <Router history={hist}>
      <Switch>
        {layout.map((route, i) => (
          <Route exact path={route.pageLink}>
            <App content={route.rows} />
          </Route>
        ))}
        <Route path={"*"}>
          <div>PAGE_NOT_FOUND</div>
        </Route>
      </Switch>
    </Router>
  );
}
