import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Haze from "../src";

import List from "../showcase/List";

export default {
  title: "Example/Haze",
  component: Haze,
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    scrollOffset: {
      control: { type: "number" },
      defaultValue: 20,
    },
    gradientColor: {
      control: { type: "color" },
      defaultValue: "rgb(255, 254, 249)",
    },
    gradientSize: {
      control: { type: "number" },
      defaultValue: 100,
    },
  },
} as ComponentMeta<typeof Haze>;

export const Horizontal: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <List.Horizontal />
    </Haze>
  );
};

Horizontal.args = {
  orientation: "horizontal",
};

export const Vertical: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <List.Vertical />
    </Haze>
  );
};

Vertical.args = {
  orientation: "vertical",
};
