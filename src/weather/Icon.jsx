import React, { useState } from "react";

export default function Icon({ icon }) {
  const [src, setSrc] = useState(" ");
  const loadImage = async () => {
    const x = await import(`./../weather/icons/${icon}.png`);
    setSrc(x.default);
  };
  loadImage();
  return (
    <div className="weather-icon">
      <img src={src} alt="fsd" />
    </div>
  );
}
