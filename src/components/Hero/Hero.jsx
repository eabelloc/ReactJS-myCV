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
        <p>πΊοΈ {hero.city}</p>
        <p>ποΈ {hero.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + hero.email}>eabelloc.dev@gmail.com</a>
        </p>
        <p>π± {hero.phone}</p>
        <p>
          πΎ
          <a href={hero.gitHub} target="_blank">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
