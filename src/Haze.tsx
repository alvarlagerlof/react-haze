import React, { useRef } from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";
import { default as ColorFun } from "color";

import {
  orientation,
  scrollOffset,
  gradientSize,
  gradeintColor,
  children,
} from "./types";

import useEdge from "./useEdge";

import * as styles from "./style.css";

export default function Haze({
  orientation,
  scrollOffset,
  gradientColor,
  gradientSize,
  children,
}: {
  orientation: orientation;
  scrollOffset: scrollOffset;
  gradientColor: gradeintColor;
  gradientSize: gradientSize;
  children: children;
}) {
  const element = useRef(null);
  const { start, end } = useEdge(orientation, scrollOffset, element);

  const customTheme = createInlineTheme(styles.vars, {
    scrollContainerOverflowX: orientation === "horizontal" ? "scroll" : "none",
    scrollContainerOverflowY: orientation === "vertical" ? "scroll" : "none",
    overlayFlexDirection: orientation === "horizontal" ? "row" : "column",
    overlayPartRotation: orientation === "horizontal" ? "90deg" : "180deg",
    overlayPartWidth: orientation === "horizontal" ? "50%" : "100%",
    overlayPartHeight: orientation === "vertical" ? "100%" : "unset",
    overlayPartColorSolid: gradientColor,
    overlayPartColorTransparent: ColorFun(gradientColor).alpha(0).toString(),
    overlayPartGradientSize: gradientSize,
  });

  return (
    <div className={styles.relative} style={customTheme}>
      <div className={styles.overlay}>
        <div className={styles.start[start ? "on" : "off"]} />
        <div className={styles.end[end ? "on" : "off"]} />
      </div>
      <div className={styles.scrollContainer} ref={element}>
        {children}
      </div>
    </div>
  );
}
