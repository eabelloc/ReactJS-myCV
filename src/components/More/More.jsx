import React from 'react'
import './More.css'

const More = ({languages, habilities, volunteer}) => {
  return (
    <div className='more_container'>

      <section className='more_section card'>
        <h3>Languages</h3>
        <div className='more card'>
          {languages.map((item) => {
            return (
              <ul key={JSON.stringify(item)}>
                <li className='name'><strong>🌐{item.language}</strong></li>
                <li><strong>Written:</strong> {item.wrlevel}</li>
                <li><strong>Spoken:</strong> {item.splevel}</li>
              </ul>
            );
          })}
        </div>
      </section>

      <section className='more_section card'>
        <h3>Habilities</h3>
        <div className='more card'>
          {habilities.map((item) => {
            return (
              <ul key={JSON.stringify(item)}>
                <li className='string'>🔧<strong>{item}</strong></li>
              </ul>
            );
          })}
        </div>
      </section>

      <section className='more_section card'>
        <h3>Volunteer</h3>
        <div className='more card'>
          {volunteer.map((item) => {
            return (
              <ul key={JSON.stringify(item)}>
                <li className='name'><strong>{item.name}</strong></li>
                <li><strong>Where:</strong> {item.where}</li>
                <li><strong>Description:</strong> {item.description}</li>
              </ul>
            );
          })}
        </div>
      </section>

    </div>
  )
}

export default More