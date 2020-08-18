import React, { useState } from "react";

export default function Temperature({ temp, description }) {
  const [deg, setDeg] = useState("C");
  const [temperature, setTemp] = useState(temp);

  const changeTypeTemp = () => {
    setDeg(deg === "C" ? "F" : "C");
    if (temperature === temp) {
      setTemp(((temp * 9) / 5 + 32).toFixed(1));
    } else {
      setTemp(temp);
    }
  };

  return (
    <div>
      <div className="temperature-value">
        <p onClick={changeTypeTemp}>
          {temperature}°<span>{deg}</span>
        </p>
      </div>
      <div className="temperature-description">
        <p>{description}</p>
      </div>
    </div>
  );
}
