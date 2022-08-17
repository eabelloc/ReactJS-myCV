import { useState } from 'react'
import './App.css'
//
import { AboutMe } from './components/AboutMe/AboutMe'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import More from './components/More/More'

import { CV } from "./CV/CV";

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  //constante para los botones:
  const [showEducation, setShowEducation] = useState(true)

  return (
    <div className="App">

      <Hero hero={hero}/>
      <AboutMe hero={hero}/>

    <div className='buttons_container'>
      <button className="button-55" role="button" onClick={() => setShowEducation(true)}><strong>Education</strong></button>
      <button className="button-55" role="button" onClick={() => setShowEducation(false)}><strong>Experience</strong></button>
    </div>
      {showEducation ? <Education education={education} /> : <Experience experience={experience} />}
      <More 
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
      
    </div>
  )
}

export default App
