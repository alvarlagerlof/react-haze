import {
  createVar,
  style,
  styleVariants,
  StyleRule,
} from "@vanilla-extract/css";
import { Edge } from "./hooks/useEdge";

const colorSolid = createVar();
const colorTransparent = createVar();
const rotation = createVar();
const width = createVar();
const height = createVar();
const overflowX = createVar();
const overflowY = createVar();
const gradientSize = createVar();
const overlayDirection = createVar();
const overlayWidth = createVar();
const overlayHeight = createVar();

export const vars = {
  colorSolid,
  colorTransparent,
  rotation,
  width,
  height,
  overflowX,
  overflowY,
  gradientSize,
  overlayDirection,
  overlayWidth,
  overlayHeight,
};

export const relative = style({
  position: "relative",
});

export const overlay = style({
  position: "absolute",
  top: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: overlayDirection,
  pointerEvents: "none",
});

export const scrollContainer = style({
  overflowX: overflowX,
  overflowY: overflowY,
});

const sideBase: StyleRule = {
  width: overlayWidth,
  height: overlayHeight,
  opacity: 0,
  transition: "all 300ms ease-in-out",
  transform: "translateX(0%)",
};

const gradientStart: StyleRule = {
  background: `
  linear-gradient(
    ${rotation},
    ${colorSolid} 0%,
    ${colorTransparent} 50%,
    ${colorTransparent} 100%
  );
`,
};

const gradientEnd: StyleRule = {
  background: `
  linear-gradient(
    ${rotation},
    ${colorTransparent} 0%,
    ${colorTransparent} 50%,
    ${colorSolid} 100%
  );
`,
};

export const start = styleVariants({
  ["on"]: {
    ...sideBase,
    ...gradientStart,
    opacity: 1,
  },
  ["off"]: { ...sideBase, ...gradientStart },
});

export const end = styleVariants({
  ["on"]: {
    ...sideBase,
    ...gradientEnd,
    opacity: 1,
  },
  ["off"]: {
    ...sideBase,
    ...gradientEnd,
  },
});

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
