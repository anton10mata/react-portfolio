import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h3>{project.name}</h3>
      <div>
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        {' | '}
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;