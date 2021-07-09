import React, { useMemo } from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";

import { Children, Color, Orientation } from "../types";

import * as styles from "../style.css";

type RelativeProps = Orientation & Color & Children;

export default function Relative({
  color,
  orientation,
  children,
}: RelativeProps) {
  const customTheme = createInlineTheme(styles.vars, {
    color,
    rotation: orientation === "horizontal" ? "90deg" : "180deg",
    width: orientation === "horizontal" ? "100%" : "unset",
    height: orientation === "vertical" ? "100%" : "unset",
    overflowX: orientation === "horizontal" ? "scroll" : "unset",
    overflowY: orientation === "vertical" ? "scroll" : "unset",
  });

  return (
    <div className={styles.relative} style={customTheme}>
      {children}
    </div>
  );
}
