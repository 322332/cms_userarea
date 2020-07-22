import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Parser from "react-html-parser";

export default function Content(props) {
  return (
    <Container>
      <Row>
        <Col>
          <h3>{props.block.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col>{Parser(props.block.content)}</Col>
      </Row>
    </Container>
  );
}
