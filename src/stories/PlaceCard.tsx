import type Place from "./place";

import "./PlaceCard.css";

export default function PlaceCard({ imageUrl, title, description }: Place) {
  return (
    <li className="PlaceCard">
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}
