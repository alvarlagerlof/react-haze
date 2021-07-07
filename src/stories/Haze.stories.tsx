import React, { useRef } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Haze, { useHaze } from "../../";
import places from "./places";
import PlaceCard from "./PlaceCard";
import Side from "../side";

import "./style.css";

export default {
  title: "Example/Haze",
  component: Haze,
} as ComponentMeta<typeof Haze>;

// export const Test: ComponentStory<typeof Haze> = (args) => {
//   const refElement = useRef(null);
//   const side: Side = useHaze("horizontal", refElement);
//   console.log(Side[side].toString());

//   return (
//     <ul
//       ref={refElement}
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         gap: "16px",
//         overflowX: "scroll",
//         padding: "24px",
//         marginInline: "-24px",
//       }}
//     >
//       {places.map((place) => (
//         <PlaceCard key={place.title} {...place} />
//       ))}
//     </ul>
//   );
// };

export const Horixontal: ComponentStory<typeof Haze> = (args) => {
  const ref = useRef(null);

  return (
    <Haze {...args} orientation="horizontal" offset={100} scrollContainer={ref}>
      <ul
        ref={ref}
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
          <PlaceCard key={place.title} {...place} />
        ))}
      </ul>
    </Haze>
  );
};

export const Vertical: ComponentStory<typeof Haze> = (args) => {
  const ref = useRef(null);

  return (
    <Haze {...args} orientation="vertical" offset={100} scrollContainer={ref}>
      <ul
        ref={ref}
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
          <PlaceCard key={place.title} {...place} />
        ))}
      </ul>
    </Haze>
  );
};