import { Ref, useLayoutEffect, useState } from "react";

enum Side {
  Start,
  End,
  None,
}

export default function useHaze(
  orientation: "vertical" | "horizontal",
  refElement: Ref<HTMLElement>
) {
  const offset = 100;
  const [side, setSide] = useState<Side>(Side.ENd);

  useLayoutEffect(() => {
    // @ts-expect-error: ugh
    const element = refElement?.current;

    function onScroll(event: any): any {
      const fromLeft = event.target.scrollLeft;
      const fromRight =
        event.target.scrollWidth -
        event.target.scrollLeft -
        event.target.clientWidth;

      console.log(fromLeft, fromRight);

      if (orientation == "horizontal") {
        if (fromLeft < offset) {
          setSide(Side.Start);
        }
        if (fromRight < offset) {
          setSide(Side.End);
        }
        if (fromLeft > offset && fromRight > offset) {
          setSide(Side.None);
        }
      } else if (orientation == "vertical") {
        // TODO: Vertical scoll
      }

      console.log(side);
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
}
