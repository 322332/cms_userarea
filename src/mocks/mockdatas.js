import React from "react";
import App from "../App";

//mock routes
export const routes = [
  {
    path: "//",
    component: "hay"
  },
  {
    path: "/sandwiches",
    component: <div>sandwiches</div>
  },
  {
    path: "/tacos",
    component: [
      {
        _uid: "1",
        path: "./components/header/header",
        component: "Header",
        title: "sa"
      },
      {
        _uid: "2",
        path: "./components/card/card",
        component: "Carousel",
        title: "naber"
      },
      {
        _uid: "3",
        path: "./components/header/header",
        component: "Header",
        title: "iyi"
      },
      {
        _uid: "4",
        path: "./components/card/card",
        component: "Header",
        title: "hm"
      }
    ]
  },
  {
    path: "/kebap",
    component: (
      <App
        content={[
          {
            _uid: "1",
            component: "Header",
            path: "./components/card/card",
            title: "sea"
          },
          {
            _uid: "2",
            component: "Header",
            path: "./components/card/card",
            title: "sea"
          }
        ]}
      />
    )
  },
  {
    path: "/kebap/urfa",
    component: <div>urfa</div>
  },
  {
    path: "/kebap/adana",
    component: <div>adana</div>
  }
];
