import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { Edge } from "./useEdge";

const color = createVar();
const orientation = createVar();

export const vars = {
  color,
  orientation,
};

export const relative = style({
  position: "relative",
});

export const fade = styleVariants({
  [Edge.Start]: {
    "::after": {
      content: `""`,
      position: "absolute",
      zIndex: 1,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      pointerEvents: "none",
      width: "100%",
      background: `
        linear-gradient(
          ${orientation}, 
          ${color} 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          rgba(242, 242, 242, 0) 100%
        );
      `,
    },
  },
  [Edge.End]: {
    "::after": {
      content: `""`,
      position: "absolute",
      zIndex: 1,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      pointerEvents: "none",
      width: "100%",
      background: `
        linear-gradient(
          ${orientation}, 
          rgba(242, 242, 242, 0) 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          ${color} 100%
        );
      `,
    },
  },
  [Edge.Both]: {
    "::after": {
      content: `""`,
      position: "absolute",
      zIndex: 1,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      pointerEvents: "none",
      width: "100%",
      background: `
        linear-gradient(
          ${orientation}, 
          ${color} 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          ${color} 100%
        );
      `,
    },
  },
});
