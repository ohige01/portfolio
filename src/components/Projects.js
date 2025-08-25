import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Tag, X, Calendar, User, CheckCircle, AlertTriangle, TrendingUp, Heart } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setActiveTab('overview'); // 모달 열 때마다 첫 번째 탭으로 리셋
  };

  const tabs = [
    { id: 'overview', label: '개요', icon: CheckCircle },
    { id: 'challenges', label: '도전과 해결', icon: AlertTriangle },
    { id: 'reflection', label: '소감', icon: Heart }
  ];

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // 모달 열렸을 때 스크롤 방지
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">제가 작업한 프로젝트들을 소개합니다</p>
        </div>
        
        <div className="projects-grid">
          <div className="grid">
            {personalInfo.projects.map((project) => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="card-image">
                  <div className="card-placeholder">
                    <div className="card-number">#{project.id}</div>
                    <div className="card-overlay">
                      <span className="view-details">자세히 보기</span>
                    </div>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            {selectedProject && (
              <div className="modal-body">
                {/* 프로젝트 헤더 */}
                <div className="modal-header">
                  <div className="project-image">
                    <div className="image-placeholder">
                      <div className="project-number">#{selectedProject.id}</div>
                      <div className="project-preview">
                        <div className="preview-header">
                          <div className="preview-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                        </div>
                        <div className="preview-content">
                          <div className="preview-text">{selectedProject.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-info">
                    <h3 className="project-title">{selectedProject.title}</h3>
                    <p className="project-description">{selectedProject.description}</p>
                    <div className="project-meta">
                      <div className="meta-item">
                        <Calendar size={16} />
                        <span>{selectedProject.period}</span>
                      </div>
                      <div className="meta-item">
                        <User size={16} />
                        <span>{selectedProject.role}</span>
                      </div>
                    </div>
                    
                    <div className="project-tech">
                      <div className="tech-list">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            <Tag size={14} />
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="project-links">
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      <a 
                        href={selectedProject.demo} 
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

                {/* 탭 네비게이션 */}
                <div className="tab-navigation">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <IconComponent size={18} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>

                {/* 탭 컨텐츠 */}
                <div className="tab-content">
                  {activeTab === 'overview' && (
                    <div className="tab-panel">
                      <div className="content-section">
                        <h4>프로젝트 개요</h4>
                        <p className="overview-text">{selectedProject.details.overview}</p>
                      </div>

                      <div className="content-section">
                        <h4>주요 기능</h4>
                        <div className="feature-grid">
                          {selectedProject.details.features.map((feature, index) => (
                            <div key={index} className="feature-item">
                              <CheckCircle size={16} />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'challenges' && (
                    <div className="tab-panel">
                      <div className="content-section">
                        <h4>어려웠던 점</h4>
                        <div className="challenge-grid">
                          {selectedProject.details.challenges.map((challenge, index) => (
                            <div key={index} className="challenge-item">
                              <AlertTriangle size={16} />
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="content-section">
                        <h4>개선한 점</h4>
                        <div className="improvement-grid">
                          {selectedProject.details.improvements.map((improvement, index) => (
                            <div key={index} className="improvement-item">
                              <TrendingUp size={16} />
                              <span>{improvement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'reflection' && (
                    <div className="tab-panel">
                      <div className="content-section">
                        <h4>프로젝트 소감</h4>
                        <div className="reflection-content">
                          <Heart size={24} />
                          <p>{selectedProject.details.reflection}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;