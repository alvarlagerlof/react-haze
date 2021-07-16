import * as React from "react";

import places from "./places";
import PlaceCard from "./PlaceCard";

function Horizontal() {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        padding: "16px",
      }}
    >
      {places.map((place) => (
        <PlaceCard key={place.title} {...place} />
      ))}
    </ul>
  );
}

function Vertical() {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        height: "100vh",
        padding: "16px",
      }}
    >
      {places.map((place) => (
        <PlaceCard key={place.title} {...place} />
      ))}
    </ul>
  );
}

const List = {
  Horizontal,
  Vertical,
};

export default List;
