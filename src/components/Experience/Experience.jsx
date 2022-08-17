import React from 'react'

const Experience = ({experience}) => {
  return (
    <div>
      <div className='experience card'>
        {experience.map((item) => {
          return (
            <ul key={JSON.stringify(item)}>
              <li className='name'>💼{item.name}</li>
              <li>{item.where}</li>
              <li>{item.date}</li>
              <li>{item.description}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Experience