import React from 'react';
import Project from './Project';

const projects = [
  {
    name: 'Arcade Hype',
    github: 'https://github.com/Cinnlight/ArcadeHype.git',
  },
  {
    name: 'Vehicle Manager',
    github: 'https://github.com/anton10mata/vehicle-manager.git',
  },
  {
    name: 'Linkzen',
    github: 'https://github.com/JacobBaqleh1/Linkzen.git',
  
  },
  {
    name: 'Employee Tracker',
    github: 'https://github.com/anton10mata/module-10challenge.git',
    
  },
  {
    name: 'Weather Dashboard',
    github: 'https://github.com/anton10mata/module9-challenge.git',
  },
  {
    name: 'README Generator',
    github: 'https://github.com/anton10mata/module-7.git',
  },
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
