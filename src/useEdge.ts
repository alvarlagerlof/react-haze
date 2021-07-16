import { Ref, useLayoutEffect, useState } from "react";

type ReturnType = {
  start: boolean;
  end: boolean;
};

function useEdge(
  orientation: "vertical" | "horizontal",
  offset: number,
  element: Ref<HTMLElement>
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

        if (from.start > offset) {
          setEnd(false);
          setStart(true);
        }
        if (from.end > offset) {
          setStart(false);
          setEnd(true);
        }
        if (from.start > offset && from.end > offset) {
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

        if (from.start > offset) {
          setEnd(false);
          setStart(true);
        }
        if (from.end > offset) {
          setStart(false);
          setEnd(true);
        }
        if (from.start > offset && from.end > offset) {
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
