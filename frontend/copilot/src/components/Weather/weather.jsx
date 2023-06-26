import React, { useState, useEffect } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  const [city, setcity] = useState("");
  const [weatherData, setweatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backgroundVideo, setBackgroundVideo] = useState(null);

  useEffect(() => {
    // Update the background video when weatherData changes
    if (weatherData) {
      setBackgroundVideo(getBackgroundVideo(weatherData.weather_description));
    }
  }, [weatherData]);

  const getBackgroundVideo = (description) => {
    switch (description) {
      case "clear sky":
        return "clear-sky.mp4";
      case "overcast clouds":
        return "scattered-clouds.mp4";
      case "few clouds":
        return "few-clouds.mp4";
      case "scattered clouds":
        return "scattered-clouds.mp4";
      case "broken clouds":
        return "broken-clouds.mp4";
      case "shower rain":
        return "shower-rain.mp4";
      case "moderate rain":
        return "shower-rain.mp4";
      case "rain":
        return "rain.mp4";
      case "thunderstorm":
        return "thunderstorm.mp4";
      case "snow":
        return "snow.mp4";
      case "light snow":
        return "snow.mp4";
      case "mist":
        return "mist.mp4";
      case "haze":
        return "mist.mp4";
      default:
        return null;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .get(`https://microsoft-back.azurewebsites.net/${city}`)
      .then((response) => {
        setweatherData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <>
      {backgroundVideo && (
        <video src={backgroundVideo} autoPlay loop muted></video>
      )}
      <div className="container-weather">
        <h1 className="section-title">Weather</h1>
        <form className="city-form" onSubmit={handleFormSubmit}>
          <label>
            City Name:
            <input
              type="text"
              value={city}
              onChange={(e) => setcity(e.target.value)}
            />
          </label>
          <button type="submit" className="btn">
            Get Weather
          </button>
        </form>
        {loading ? (
          <div>Loading...</div>
        ) : (
          weatherData && (
            <div className="result">
              <p>🧐 {weatherData.weather_description}</p>
              <p>🌡️ {weatherData.temperature}°C</p>
              <p>💧 {weatherData.humidity}%</p>
              <p>💨 {weatherData.wind_speed}m/s</p>
              <p>💨⬆️ {weatherData.wind_direction}°</p>
              <p>☁️ {weatherData.cloudiness}%</p>
              <p>🌇 {weatherData.sunrise_time} GMT</p>
              <p>🌆 {weatherData.sunset_time} GMT</p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Weather;
