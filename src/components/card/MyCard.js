import React, { useState } from "react";
import { Card } from "react-bootstrap";

import { useSelector } from "react-redux";

export default function MyCard(props) {
  const state = useSelector((state) => state.componentsInfo);

  return (
    <Card>
      {state.map((item) =>
        item.id === props.item ? <div>{item.componentName}</div> : <div>{"."}</div>
      )}
    </Card>
  );
}
