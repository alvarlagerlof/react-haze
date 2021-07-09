import React from "react";
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
    color: color,
    orientation: orientation === "horizontal" ? "90deg" : "180deg",
  });

  return (
    <div className={styles.relative} style={customTheme}>
      {children}
    </div>
  );
}
