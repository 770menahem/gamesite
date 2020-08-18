import React from "react";
import { Link } from "react-router-dom";

export default function Games({ gamesCard }) {
  return (
    <div className="gamesCard">
      {gamesCard.map((g) => {
        return (
          <Link key={g.name} className="card" to={`${g.url}`}>
            <img src={g.img} alt={g.name} />
          </Link>
        );
      })}
    </div>
  );
}
