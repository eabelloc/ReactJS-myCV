import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="Elias Bello" />
      <div className="card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🗺️ {hero.city}</p>
        <p>🗓️ {hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>eabelloc.dev@gmail.com</a>
        </p>
        <p>📱 {hero.phone}</p>
        <p>
          💾
          <a href={hero.gitHub} target="_blank">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
