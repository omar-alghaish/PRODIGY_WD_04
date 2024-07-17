import React from 'react';
import './Skills.css';

const skills = [
  'JavaScript', 'HTML', 'CSS', 'Mongoose', 'Material UI', 'Node CLI', 'Back-End Development',
  'React', 'Express.js', 'TypeScript', 'JSON', 'NPM Packages', 'GraphQL', 'Node.js',
  'MongoDB', 'SCSS', 'Progressive Web Apps', 'Rollup', 'Front-End Development'
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
