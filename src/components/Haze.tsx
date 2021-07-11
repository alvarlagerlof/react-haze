import React, { useRef } from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";
import { default as ColorFun } from "color";

import { Children, Color, Offset, Orientation } from "../types";

import useEdge from "../hooks/useEdge";

import * as styles from "../style.css";

type HazeProps = Orientation & Offset & Color & Children;

export default function Haze({
  orientation,
  offset,
  color,
  children,
}: HazeProps) {
  const element = useRef(null);
  const { start, end } = useEdge(orientation, offset, element);

  const customTheme = createInlineTheme(styles.vars, {
    colorSolid: color,
    colorTransparent: ColorFun(color).alpha(0).toString(),
    rotation: orientation === "horizontal" ? "90deg" : "180deg",
    width: orientation === "horizontal" ? "100%" : "unset",
    height: orientation === "vertical" ? "100%" : "unset",
    overflowX: orientation === "horizontal" ? "scroll" : "unset",
    overflowY: orientation === "vertical" ? "scroll" : "unset",
    gradientSize: "100px",
    overlayDirection: orientation === "horizontal" ? "row" : "column",
    overlayWidth: orientation === "horizontal" ? "50%" : "100%",
    overlayHeight: orientation === "horizontal" ? "100%" : "50%",
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
