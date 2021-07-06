import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Haze from "../../";
import places from "./places";
import PlaceCard from "./PlaceCard";

import "./style.css";

export default {
  title: "Example/Haze",
  component: Haze,
} as ComponentMeta<typeof Haze>;

export const Horixontal: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          overflowX: "scroll",
          padding: "24px",
          marginInline: "-24px",
        }}
      >
        {places.map((place) => (
          <PlaceCard {...place} />
        ))}
      </ul>
    </Haze>
  );
};

export const Vertical: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "scroll",
          height: "500px",
          paddingInline: "24px",
          marginInline: "-24px",
          paddingBlock: "24px",
        }}
      >
        {places.map((place) => (
          <PlaceCard {...place} />
        ))}
      </ul>
    </Haze>
  );
};
