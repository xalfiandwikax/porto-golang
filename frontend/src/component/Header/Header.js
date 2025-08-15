import React from 'react';


const Header = ({ name, title }) => (
  <header className="portfolio-header">
    <h1>I'm <span>{name}</span></h1>
    <h2>{title}</h2>
    <div className="divider"></div>
  </header>
);

export default Header;