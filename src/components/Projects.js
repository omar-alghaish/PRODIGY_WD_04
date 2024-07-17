import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'NodeJs Full E-Commerce Restful API',
    description: 'A comprehensive e-commerce API built with NodeJs.',
    link: 'https://github.com/omar-alghaish/NodeJs-Full-E-Commerce-restful-API'
  },
  {
    title: 'Social Media App Fullstack',
    description: 'A fullstack social media application.',
    link: 'https://github.com/omar-alghaish/social-media-server'
  },
  {
    title: 'Authentication and Authorization System',
    description: 'A system for handling user authentication and authorization.',
    link: 'https://github.com/omar-alghaish/Authentication-system'
  },
  {
    title: 'Movie App Fullstack',
    description: 'A movie application built with fullstack technologies.',
    link: 'https://movies-shop1.web.app/'
  },
  {
    title: 'Stylesh (JavaScript and TypeScript library)',
    description: 'A JavaScript and TypeScript library for styling.',
    link: 'https://www.npmjs.com/package/stylesh'
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
