import React from "react";

import Components from "./component_creator";

import Card from "./components/card/MyCard";

import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

export default function App(props) {
  const rows = props.content;

  return (
    <Container>
      {rows.map((rowItem, id) => (
        <Row key={rowItem.rowID}>
          {rowItem.cols.map((colItem, id) => (
            <Col md={colItem.md} key={colItem.colID}>
              <Card key={colItem.colID} item={colItem.componentID}></Card>
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
}
