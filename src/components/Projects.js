import React, { useState } from 'react';
import { Github, ExternalLink, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => 
      prev === personalInfo.projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) => 
      prev === 0 ? personalInfo.projects.length - 1 : prev - 1
    );
  };

  const project = personalInfo.projects[currentProject];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">제가 작업한 프로젝트들을 소개합니다</p>
        </div>
        
        <div className="projects-showcase">
          <div className="project-navigation">
            <button onClick={prevProject} className="nav-btn">
              <ChevronLeft size={24} />
            </button>
            
            <div className="project-indicators">
              {personalInfo.projects.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentProject ? 'active' : ''}`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
            
            <button onClick={nextProject} className="nav-btn">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="project-display">
            <div className="project-image">
              <div className="image-placeholder">
                <div className="project-number">#{project.id}</div>
                <div className="project-preview">
                  <div className="preview-header">
                    <div className="preview-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <div className="preview-content">
                    <div className="preview-text">{project.title}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                <h4>사용 기술</h4>
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      <Tag size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="projects-grid">
          <h3 className="grid-title">모든 프로젝트</h3>
          <div className="grid">
            {personalInfo.projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${index === currentProject ? 'active' : ''}`}
                onClick={() => setCurrentProject(index)}
              >
                <div className="card-image">
                  <div className="card-placeholder">
                    <div className="card-number">#{project.id}</div>
                  </div>
                </div>
                
                <div className="card-content">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  
                  <div className="card-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  
                  <div className="card-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;