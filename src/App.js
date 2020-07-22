import React, { useEffect } from "react";

import Components from "./component_creator";

import CompMatch from "./CompMatch";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

export default function App(props) {
  const rows = props.content;

  return (
    <Container fluid>
      {rows.map((rowItem, id) => (
        <Row key={rowItem.rowID}>
          {rowItem.cols.map((colItem, id) => (
            <Col md={colItem.md} key={colItem.colID}>
              <CompMatch
                key={colItem.colID}
                item={colItem.componentID}
              ></CompMatch>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
