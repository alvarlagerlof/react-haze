import {
  createVar,
  style,
  styleVariants,
  StyleRule,
} from "@vanilla-extract/css";
import { Edge } from "./hooks/useEdge";

const color = createVar();
const rotation = createVar();
const width = createVar();
const height = createVar();
const overflowX = createVar();
const overflowY = createVar();

export const vars = {
  color,
  rotation,
  width,
  height,
  overflowX,
  overflowY,
};

export const relative = style({
  position: "relative",
});

const top: StyleRule = {
  overflowX: overflowX,
  overflowY: overflowY,
};

const base: StyleRule = {
  content: `""`,
  position: "absolute",
  zIndex: 1,
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  pointerEvents: "none",
  marginTop: "20px",
  width: width,
  height: height,
};

export const fade = styleVariants({
  [Edge.Start]: {
    ...top,
    "::after": {
      ...base,
      background: `
        linear-gradient(
          ${rotation}, 
          ${color} 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          rgba(242, 242, 242, 0) 100%
        );
      `,
    },
  },
  [Edge.End]: {
    ...top,
    "::after": {
      ...base,
      background: `
        linear-gradient(
          ${rotation}, 
          rgba(242, 242, 242, 0) 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          ${color} 100%
        );
      `,
    },
  },
  [Edge.Both]: {
    ...top,
    "::after": {
      ...base,
      background: `
        linear-gradient(
          ${rotation}, 
          ${color} 0%, 
          rgba(242, 242, 242, 0) 20%, 
          rgba(242, 242, 242, 0) 80%, 
          ${color} 100%
        );
      `,
    },
  },
});
