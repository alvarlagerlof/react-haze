import {
  createVar,
  style,
  styleVariants,
  StyleRule,
} from "@vanilla-extract/css";

const scrollContainerOverflowX = createVar();
const scrollContainerOverflowY = createVar();
const overlayFlexDirection = createVar();
const overlayPartRotation = createVar();
const overlayPartWidth = createVar();
const overlayPartHeight = createVar();
const overlayPartColorSolid = createVar();
const overlayPartColorTransparent = createVar();
const overlayPartGradientSize = createVar();

export const vars = {
  scrollContainerOverflowX,
  scrollContainerOverflowY,
  overlayFlexDirection,
  overlayPartRotation,
  overlayPartWidth,
  overlayPartHeight,
  overlayPartColorSolid,
  overlayPartColorTransparent,
  overlayPartGradientSize,
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
  flexDirection: overlayFlexDirection,
  pointerEvents: "none",
});

export const scrollContainer = style({
  overflowX: scrollContainerOverflowX,
  overflowY: scrollContainerOverflowY,
});

const sideBase: StyleRule = {
  width: overlayPartWidth,
  height: overlayPartHeight,
  opacity: 0,
  transition: "all 300ms ease-in-out",
};

const gradientStart: StyleRule = {
  background: `
  linear-gradient(
    ${overlayPartRotation},
    ${overlayPartColorSolid} 0%,
    ${overlayPartColorTransparent} ${overlayPartGradientSize},
    ${overlayPartColorTransparent} 100%
  );
`,
};

const gradientEnd: StyleRule = {
  background: `
  linear-gradient(
    ${overlayPartRotation},
    ${overlayPartColorTransparent} 0%,
    ${overlayPartColorTransparent} calc(100% - ${overlayPartGradientSize}),
    ${overlayPartColorSolid} 100%
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
