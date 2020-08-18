import React, { useState, useRef } from "react";

export default function Temperature({ temp: celsius, description }) {
  const [deg, setDeg] = useState("C");
  const fahrenheit = useRef(((celsius * 9) / 5 + 32).toFixed(1));
  const temperature = useRef(celsius);

  const changeTypeTemp = () => {
    temperature.current = deg !== "C" ? celsius : fahrenheit.current;
    setDeg(deg === "C" ? "F" : "C");
  };

  return (
    <div>
      <div className="temperature-value">
        <p onClick={changeTypeTemp}>
          {temperature.current}°<span>{deg}</span>
        </p>
      </div>
      <div className="temperature-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
