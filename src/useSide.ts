import { Ref, useLayoutEffect, useState } from "react";

enum Side {
  Start,
  End,
  None,
}

function useSide(
  orientation: "vertical" | "horizontal",
  offset: number,
  element: Ref<HTMLElement>
) {
  const [side, setSide] = useState(Side.Start);

  useLayoutEffect(() => {
    // @ts-expect-error: ugh
    const current = element?.current;

    function onScroll(event: any): void {
      if (orientation == "horizontal") {
        const from = {
          start: event.target.scrollLeft,
          end:
            event.target.scrollWidth -
            event.target.scrollLeft -
            event.target.clientWidth,
        };

        if (from.start < offset) {
          setSide(Side.Start);
        }
        if (from.end < offset) {
          setSide(Side.End);
        }
        if (from.start > offset && from.end > offset) {
          setSide(Side.None);
        }
      } else if (orientation == "vertical") {
        const from = {
          start: event.target.scrollTop,
          end:
            event.target.scrollHeight -
            event.target.scrollTop -
            event.target.clientHeight,
        };

        console.log("vertical");

        if (from.start < offset) {
          setSide(Side.Start);
        }
        if (from.end < offset) {
          setSide(Side.End);
        }
        if (from.start > offset && from.end > offset) {
          setSide(Side.None);
        }
      }
    }

    if (element !== null) {
      current.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      if (element !== null) {
        current.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return side;
}

export { useSide, Side };
