import React from 'react';


const Section = ({ title, subtitle, children }) => (
  <section className="portfolio-section">
    <h3>{title}</h3>
    {subtitle && <p className="subtitle">{subtitle}</p>}
    <div className="section-divider"></div>
    {children}
  </section>
);

export default Section;