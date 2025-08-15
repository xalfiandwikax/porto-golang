import React from 'react';

const About = ({ content }) => (
  <div className="about-content">
    {content.split('\n').map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ))}
  </div>
);

export default About;