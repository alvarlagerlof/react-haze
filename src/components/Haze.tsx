import React, { useRef } from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";
import { default as ColorFun } from "color";

import { Children, Color, Offset, GradientSize, Orientation } from "../types";

import useEdge from "../hooks/useEdge";

import * as styles from "../style.css";

type HazeProps = Orientation & Offset & Color & GradientSize & Children;

export default function Haze({
  orientation,
  offset,
  color,
  gradientSize,
  children,
}: HazeProps) {
  const element = useRef(null);
  const { start, end } = useEdge(orientation, offset, element);

  const customTheme = createInlineTheme(styles.vars, {
    scrollContainerOverflowX: orientation === "horizontal" ? "scroll" : "unset",
    scrollContainerOverflowY: orientation === "vertical" ? "scroll" : "unset",
    overlayFlexDirection: orientation === "horizontal" ? "row" : "column",
    overlayPartRotation: orientation === "horizontal" ? "90deg" : "180deg",
    overlayPartWidth: orientation === "horizontal" ? "50%" : "100%",
    overlayPartHeight: orientation === "vertical" ? "100%" : "unset",
    overlayPartColorSolid: color,
    overlayPartColorTransparent: ColorFun(color).alpha(0).toString(),
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
