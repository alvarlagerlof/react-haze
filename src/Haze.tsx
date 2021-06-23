import React from "react";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  children?: React.ReactNode;
};

export default function Haze({ orientation, children }: HazeProps) {
  return (
    <div>
      <p>Haze that is {orientation}</p>
      <div>{children}</div>
    </div>
  );
}
