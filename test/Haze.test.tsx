import React from "react";
import * as ReactDOM from "react-dom";
import { Horizontal, Vertical } from "../stories/Haze.stories";

describe("Haze", () => {
  it("renders Horizontal without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Horizontal
        orientation="horizontal"
        offset={20}
        color="white"
        gradientSize="100px"
      >
        <p>Child</p>
      </Horizontal>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders Vertical without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Vertical
        orientation="vertical"
        offset={20}
        color="white"
        gradientSize="100px"
      >
        <p>Child</p>
      </Vertical>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
