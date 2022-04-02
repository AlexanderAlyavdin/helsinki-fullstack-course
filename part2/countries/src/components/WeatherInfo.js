import { useEffect, useState } from "react";
import axios from "axios";

const WeatherInfo = ({ latlng }) => {
  const [weatherInfo, setWeatherInfo] = useState(undefined);

  useEffect(() => {
    const [lat, lon] = latlng;
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    axios.get(url).then(({ data }) => {
      setWeatherInfo(data);
    });
  }, [latlng]);

  if (!weatherInfo) {
    return <></>;
  }

  return (
    <div>
      <div>temperature {weatherInfo.main.temp} Celcius</div>
      <img
        src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <div>wind {weatherInfo.wind.speed} m/s</div>
    </div>
  );
};

export default WeatherInfo;
