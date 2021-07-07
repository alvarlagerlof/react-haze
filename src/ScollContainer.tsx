import React, { useRef } from "react";

import { useEdge } from "./useEdge";

import * as styles from "./Haze.css";

type ScrollContainerProps = {
  orientation: "vertical" | "horizontal";
  offset: number;
  children: JSX.Element;
};

export default function ScrollContainer({
  orientation,
  offset,
  children,
}: ScrollContainerProps) {
  const element = useRef(null);
  const edge = useEdge(orientation, offset, element);

  return React.cloneElement(children, {
    className: styles.fade[edge],
    ref: element,
  });
}
