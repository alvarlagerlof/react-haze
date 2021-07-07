import React from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";

import { Edge, useEdge } from "./useEdge";

import * as styles from "./Haze.css";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  offset: number;
  scrollContainer: React.Ref<HTMLElement>;
  color: string;
  children: React.ReactNode;
};

export default function Haze({
  orientation,
  offset,
  scrollContainer,
  color,
  children,
}: HazeProps) {
  const edge = useEdge(orientation, offset, scrollContainer);

  const customTheme = createInlineTheme(styles.vars, {
    color: color,
    orientation: orientation === "vertical" ? "0deg" : "90deg",
  });

  return (
    <div className={styles.relative} style={customTheme}>
      <div className={styles.fade[edge]}>{children}</div>
    </div>
  );
}
