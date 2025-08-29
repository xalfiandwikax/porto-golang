import React from 'react';
import { portfolioData } from './data/portoData';
import Header from './component/Header/Header';
import Section from './component/Section/Section';
import SkillGrid from './component/Skill-grid/Skillgrid';
import About from './component/About/About';
import './App.css';

const App = () => {
  const renderSection = (section) => {
    switch(section.type) {
      case 'skills':
        return <SkillGrid items={section.items} />;
      case 'about':
        return <About content={section.content} />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-app">
      <Header {...portfolioData.header} />
      
      {portfolioData.sections.map((section, index) => (
        <Section 
          key={index}
          title={section.title}
          subtitle={section.subtitle}
        >
          {renderSection(section)}
        </Section>
      ))}
    </div>
  );
};

export default App;