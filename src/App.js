import React from "react";
import Components from "./component_creator";

import "./App.css";

class App extends React.Component {
  render() {
    const content = this.props.content;
    return <div>{content.map(block => Components(block))}</div>;
  }
}

export default App;
