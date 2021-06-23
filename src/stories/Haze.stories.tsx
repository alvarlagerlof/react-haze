import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Haze from "../";
import ExampleContent from "./ExampleContent";

export default {
  title: "Example/Haze",
  component: Haze,
} as ComponentMeta<typeof Haze>;

const Template: ComponentStory<typeof Haze> = (args) => {
  return (
    <Haze {...args}>
      <p>some content</p>
    </Haze>
  );
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: "horizontal",
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: "vertical",
};

export const PageGrid: ComponentStory<typeof Haze> = () => {
  return <ExampleContent />;
};
