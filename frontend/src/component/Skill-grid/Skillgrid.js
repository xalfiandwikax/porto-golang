import React from 'react';

const Skillgrid = ({ items }) => (
  <div className="skills-grid">
    {items.map((item, index) => (
      <div key={index} className="skill-item">
        {item}
      </div>
    ))}
  </div>
);

export default Skillgrid;