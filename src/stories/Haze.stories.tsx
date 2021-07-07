import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Haze from "../../";
import "../../dist/index.css";

import places from "./places";
import PlaceCard from "./PlaceCard";

import "./style.css";

export default {
  title: "Example/Haze",
  component: Haze,
  argTypes: {
    color: {
      control: { type: "color" },
      defaultValue: "red",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    offset: {
      control: { type: "number" },
      defaultValue: 20,
    },
  },
} as ComponentMeta<typeof Haze>;

export const Horizontal: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <ul
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          overflowX: "scroll",
          padding: "16px",
        }}
      >
        {places.map((place) => (
          <PlaceCard key={place.title} {...place} />
        ))}
      </ul>
    </Haze>
  );
};

Horizontal.args = {
  orientation: "horizontal",
};

export const Vertical: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <ul
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "scroll",
          height: "100vh",
          padding: "16px",
        }}
      >
        {places.map((place) => (
          <PlaceCard key={place.title} {...place} />
        ))}
      </ul>
    </Haze>
  );
};

Vertical.args = {
  orientation: "vertical",
};
