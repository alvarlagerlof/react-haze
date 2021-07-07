import React, { Ref } from "react";
import { Edge, useEdge } from "./useEdge";

import * as styles from "./Haze.css";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  offset: number;
  scrollContainer: Ref<HTMLElement>;
  children: React.ReactNode;
};

export default function Haze({
  orientation,
  offset,
  scrollContainer,
  children,
}: HazeProps) {
  const edge = useEdge(orientation, offset, scrollContainer);

  return (
    <>
      <div>
        <p>Orientation: {orientation}</p>
        <p>Edge: {Edge[edge].toString()}</p>
      </div>

      <div className={styles.test}>{children}</div>
    </>
  );
}
