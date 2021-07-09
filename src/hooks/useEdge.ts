import { Ref, useLayoutEffect, useState } from "react";

enum Edge {
  Start,
  End,
  Both,
}

function useEdge(
  orientation: "vertical" | "horizontal",
  offset: number,
  element: Ref<HTMLElement>
) {
  const [edge, setEdge] = useState<Edge>(Edge.End);

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
          setEdge(Edge.Start);
        }
        if (from.end > offset) {
          setEdge(Edge.End);
        }
        if (from.start > offset && from.end > offset) {
          setEdge(Edge.Both);
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
          setEdge(Edge.Start);
        }
        if (from.end > offset) {
          setEdge(Edge.End);
        }
        if (from.start > offset && from.end > offset) {
          setEdge(Edge.Both);
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

  return edge;
}

export { useEdge, Edge };
