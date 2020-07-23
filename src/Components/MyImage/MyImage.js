import React from "react";
import { Image } from "react-bootstrap";
export default function MyCarousel(props) {
  console.log(props.block);
  return (
    <center>
      <Image
        className="d-block w-100"
        src={"http://127.0.0.1:3000" + props.block.src}
      />
    </center>
  );
}
