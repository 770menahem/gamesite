import React from "react";

export default function Icon({ icon }) {
  const src = `./icons/${icon}.png`;

  return (
    <div className="weather-icon">
      <img src={src} alt="icon" />
    </div>
  );
}
