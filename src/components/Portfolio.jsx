import React from 'react';
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: '/path/to/project1-image.png',
      deployedLink: 'https://example.com/project1',
      repoLink: 'https://github.com/anton10mata/project1'
    },
    // Add more projects
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
