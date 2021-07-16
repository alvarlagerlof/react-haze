import { useLayoutEffect, useState } from "react";

import { element, orientation, scrollOffset } from "./types";

type ReturnType = {
  start: boolean;
  end: boolean;
};

function useEdge(
  orientation: orientation,
  scrollOffset: scrollOffset,
  element: element
): ReturnType {
  const [start, setStart] = useState<boolean>(false);
  const [end, setEnd] = useState<boolean>(true);

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

        if (from.start > scrollOffset) {
          setEnd(false);
          setStart(true);
        }
        if (from.end > scrollOffset) {
          setStart(false);
          setEnd(true);
        }
        if (from.start > scrollOffset && from.end > scrollOffset) {
          setStart(true);
          setEnd(true);
        }
      } else if (orientation == "vertical") {
        const from = {
          start: event.target.scrollTop,
          end:
            event.target.scrollHeight -
            event.target.scrollTop -
            event.target.clientHeight,
        };

        if (from.start > scrollOffset) {
          setEnd(false);
          setStart(true);
        }
        if (from.end > scrollOffset) {
          setStart(false);
          setEnd(true);
        }
        if (from.start > scrollOffset && from.end > scrollOffset) {
          setStart(true);
          setEnd(true);
        }
      }
    }

    if (current !== null) {
      current.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      if (current !== null) {
        current.removeEventListener("scroll", onScroll);
      }
    };
  }, []);

  return { start, end };
}

export default useEdge;
