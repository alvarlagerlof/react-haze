import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Haze from "../../";
import "../../dist/index.css";

import List from "./example/List";

import "./style.css";

import places from "./example/places";
import PlaceCard from "./example/PlaceCard";

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
      <List.Horizontal />
      {/* <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "16px",
        }}
      >
        {places.map((place) => (
          <PlaceCard key={place.title} {...place} />
        ))}
      </ul> */}
    </Haze>
  );
};

Horizontal.args = {
  orientation: "horizontal",
};

export const Vertical: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      {/* <List.Vertical /> */}
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
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
