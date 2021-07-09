import React, { useRef } from "react";

import { Children, Offset, Orientation } from "../types";
import { useEdge } from "../hooks/useEdge";

import * as styles from "../style.css";

type ContainerProps = Orientation & Offset & Children;

export default function CloneContainer({
  orientation,
  offset,
  children,
}: ContainerProps) {
  const element = useRef(null);
  const edge = useEdge(orientation, offset, element);
  const mode = typeof children.type === "function" ? "wrap" : "clone";

  if (mode == "clone") {
    return React.cloneElement(children, {
      className: styles.fade[edge],
      ref: element,
    });
  } else {
    return (
      <div className={styles.fade[edge]} ref={element}>
        {children}
      </div>
    );
  }
}
