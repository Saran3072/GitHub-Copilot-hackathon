import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className="home-container">
        <h1>Welcome to </h1>
        <h1 class="title">
          <span class="weather">Weather</span>
          <span class="sense">Sense</span>
        </h1>
        <p>Get the latest weather information for any city.</p>
        <Link to="/weather">
          <button className="go-button">Let's Go</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
