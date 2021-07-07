import React, { Ref } from "react";
import { Side, useSide } from "./useSide";

//import * as styles from "./Haze.css";

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
  const side: Side = useSide(orientation, offset, scrollContainer);

  return (
    <>
      <div>
        <p>Haze that is: {orientation}</p>
        <p>Side: {Side[side].toString()}</p>
      </div>

      <>{children}</>
    </>
  );
}
