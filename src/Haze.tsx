import React from "react";
import * as styles from "./Haze.css";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  children?: React.ReactNode;
};

export default function Haze({ orientation, children }: HazeProps) {
  return (
    <div className={styles.test}>
      <p>Haze that is {orientation}</p>
      <div>{children}</div>
    </div>
  );
}
