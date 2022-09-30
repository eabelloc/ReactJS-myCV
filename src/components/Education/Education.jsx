import React from "react";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
        {education.map((item) => {
          return (
            <ul key={JSON.stringify(item)}>
              <li className="name">📕 {item.name}</li>
              <li>{item.where}</li>
              <li>{item.date}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
