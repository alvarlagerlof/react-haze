import React, { useRef } from "react";
import { createInlineTheme } from "@vanilla-extract/dynamic";

import { Children, Color, Offset, Orientation } from "../types";
import Relative from "./Relative";
import Container from "./Container";

type HazeProps = Orientation & Offset & Color & Children;

export default function Haze({
  orientation,
  offset,
  color,
  children,
}: HazeProps) {
  return (
    <Relative color={color} orientation={orientation}>
      <Container offset={offset} orientation={orientation}>
        {children}
      </Container>
    </Relative>
  );
}
