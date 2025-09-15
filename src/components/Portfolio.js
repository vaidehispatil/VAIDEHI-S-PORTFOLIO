import React, { useState } from 'react';
import './Portfolio.css';

const projectsData = [
  {
    id: 1,
    name: 'Verika Jewelry Store App',
    description: 'A responsive e-commerce front-end for a jewelry brand, with a dynamic product gallery and shopping cart.',
    languages: ['React', 'CSS', 'JavaScript','Node.js'],
    domain: 'E-commerce',
    type: 'Frontend',
    link: 'https://vireka-jewelry-store.vercel.app/' 
  },

  {
    id: 2,
    name: 'Cozy Beans Coffee Shop Website',
    description: 'A responsive and user-friendly website for a coffee shop featuring an interactive menu, customer testimonials, image gallery, and contact form using HTML, CSS, JavaScript, Bootstrap, and Swiper.js.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    domain: 'Hospitality / Food & Beverage',
    type: 'Frontend',
    link: 'https://web-promming.vercel.app/'
  },

  {
    id: 3,
    name: 'Portfolio Website',
    description: 'The personal website you are currently viewing, built to showcase skills and projects.',
    languages: ['React', 'HTML', 'CSS', 'JavaScript','Node.js'],
    domain: 'Personal',
    type: 'Frontend',
    link: '#' 
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const handleFilterClick = (filterName) => {
    setFilter(filterName);
  };

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All') return true;
    return project.type === filter || project.domain === filter;
  });

  return (
    <div className="portfolio-page-container">
      <div className="portfolio-container">
        <h1 className="portfolio-title">My Projects</h1>
        <div className="filters">
          <button
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
            onClick={() => handleFilterClick('All')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'Frontend' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Frontend')}
          >
            Frontend
          </button>
          <button
            className={`filter-btn ${filter === 'Full-stack' ? 'active' : ''}`}
            onClick={() => handleFilterClick('Full-stack')}
          >
            Full-stack
          </button>
          <button
            className={`filter-btn ${filter === 'E-commerce' ? 'active' : ''}`}
            onClick={() => handleFilterClick('E-commerce')}
          >
            E-commerce
          </button>
          
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-languages">
                {project.languages.map(lang => (
                  <span key={lang} className="language-tag">{lang}</span>
                ))}
              </div>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Portfolio;