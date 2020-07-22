import React from "react";
import { Carousel } from "react-bootstrap";
export default function MyCarousel(props) {
  console.log(props.block);
  return (
    <center>
      {" "}
      <Carousel className={"h-100 w-75"}>
        {props.block.items.map((item) => (
          <Carousel.Item>
            <a href={item.link}>
              {" "}
              <img
                className="d-block w-100"
                src={"http://127.0.0.1:3000" + item.src}
                alt={item.alt}
              />
            </a>
            <Carousel.Caption>
              <h3>{item.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </center>
  );
}
