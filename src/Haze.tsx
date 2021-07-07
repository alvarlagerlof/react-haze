import React from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";

import ScrollContainer from "./ScollContainer";

import * as styles from "./style.css";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  offset: number;
  color: string;
  children: JSX.Element;
};

export default function Haze({
  orientation,
  offset,
  color,
  children,
}: HazeProps) {
  const customTheme = createInlineTheme(styles.vars, {
    color: color,
    orientation: orientation === "horizontal" ? "90deg" : "180deg",
  });

  return (
    <div className={styles.relative} style={customTheme}>
      <ScrollContainer orientation={orientation} offset={offset}>
        {children}
      </ScrollContainer>
    </div>
  );
}
