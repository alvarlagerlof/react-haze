import places from "./places";
import PlaceCard from "./PlaceCard";

function Horizontal() {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "16px",
        overflowX: "scroll",
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
        overflowY: "scroll",
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

export { Horizontal, Vertical };
