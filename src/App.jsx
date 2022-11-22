import { useState } from "react";
import "./App.css";
//
import { AboutMe } from "./components/AboutMe/AboutMe";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";

import { CV } from "./CV/CV";

const {
  hero,
  education,
  experience,
  languages,
  habilities,
  softSkills,
  volunteer,
} = CV;

const App = () => {
  //constante para los botones:
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <AboutMe hero={hero} />

      <div className="buttons_container">
        <div className="button">
          <button
            className="button-57"
            role="button"
            onClick={() => setShowEducation(true)}
          >
            <span class="text">Education</span>
            <span>Press Here</span>
          </button>
        </div>

        <div className="button">
          <button
            className="button-57"
            role="button"
            onClick={() => setShowEducation(false)}
          >
            <span class="text">Experience</span>
            <span>Press Here</span>
          </button>
        </div>
      </div>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}
      <More
        languages={languages}
        habilities={habilities}
        softSkills={softSkills}
        volunteer={volunteer}
      />
    </div>
  );
};

export default App;
