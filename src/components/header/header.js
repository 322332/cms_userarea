import React, { Component } from "react";

export class header extends Component {
  render() {
    const content = this.props.block;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{content.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}

export default header;
