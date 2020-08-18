import React, { useState, useEffect } from "react";
import Location from "./Location";
import Temperature from "./Temperature";
import Icon from "./Icon";
import axios from "axios";
import "./weather.css";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("London");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1ed5211f03c14c276d927db8fc6d02b4`
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
        setError(null);
      })
      .catch((e) => {
        setError("wrong location");
      });
  }, [location]);

  return (
    <>
      {weather ? (
        <div className="container">
          <div className="app-title">Weather</div>
          {error && <div className="notification">{error}</div>}
          <div className="weather-container">
            <Icon icon={weather.weather[0].icon} />
            <Temperature
              temp={(weather.main.temp - 273).toFixed(1)}
              description={weather.weather[0].description}
            />
            <Location place={weather.name} setLocation={setLocation} />
          </div>
        </div>
      ) : (
        <h1 className="container">loading</h1>
      )}
    </>
  );
};

export default Weather;
