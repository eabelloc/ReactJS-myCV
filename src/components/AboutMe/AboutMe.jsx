import React from "react";
import "./AboutMe.css";

export const AboutMe = ({ hero }) => {
  //destructuring funciona mejor para mapear dentro de un objeto (que se me habia pasado este metodo xD)
  const { aboutMe } = hero;
  return (
    <div>
      <h3>About Me</h3>
      <div className="aboutMe">
        {aboutMe.map((item) => {
          return (
            <ul key={JSON.stringify(item)}>
              <li className="info">👨‍💻{item.info}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
