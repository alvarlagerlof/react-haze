import React, { useLayoutEffect, useRef, useState } from "react";

//import * as styles from "./Haze.css";

type HazeProps = {
  orientation: "vertical" | "horizontal";
  children: React.ReactNode;
};

export default function Haze({ orientation, children }: HazeProps) {
  const refElement = useRef<HTMLDivElement>(null);

  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  useLayoutEffect(() => {
    const element = refElement.current;

    function onScroll(event: any): any {
      console.log("scoll", event);
      setX(element?.scrollLeft as number);
      // setX(event.target.scrollLeft);
      // setY(event.target.scrollTop);
    }

    if (element !== null) {
      console.log("add scroll listner", element);
      element.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      if (element !== null) {
        console.log("remove scroll listner");
        element.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return (
    <>
      <div>
        <p>Haze that is: {orientation}</p>
        <p>x: {x}</p>
        <p>y: {y}</p>
      </div>

      <>{children}</>
    </>
  );
}
