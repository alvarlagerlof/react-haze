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

    function calculateEdges(event: any): void {
      if (orientation == "horizontal") {
        const from = {
          start: current.scrollLeft,
          end: current.scrollWidth - current.scrollLeft - current.clientWidth,
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
          start: current.scrollTop,
          end: current.scrollHeight - current.scrollTop - current.clientHeight,
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
      current.addEventListener("scroll", calculateEdges, { passive: true });
      window.addEventListener("resize", calculateEdges, { passive: true });
    }

    return () => {
      if (current !== null) {
        current.removeEventListener("scroll", calculateEdges);
        window.removeEventListener("resize", calculateEdges);
      }
    };
  }, []);

  return { start, end };
}

export default useEdge;
