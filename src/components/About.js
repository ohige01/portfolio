import React, { useState, useEffect } from 'react';
import { Calendar, BookOpen, Github, ExternalLink, Tag, X, User, CheckCircle, AlertTriangle, Heart, Play, Eye } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/About.css';

const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Find matching project data for timeline item
  const findProjectById = (timelineItem) => {
    return personalInfo.projects.find(project => 
      project.title === timelineItem.title
    );
  };

  const openModal = (timelineItem) => {
    const project = findProjectById(timelineItem);
    if (project) {
      setSelectedProject(project);
      setSelectedImageIndex(0); // Reset to first image
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsImageModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setSelectedImageIndex(0);
    }, 300);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        if (isImageModalOpen) {
          closeImageModal();
        } else if (isModalOpen) {
          closeModal();
        }
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen, isImageModalOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isModalOpen || isImageModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, isImageModalOpen]);

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">개발자로서의 여정</h2>
          <p className="section-description">프로젝트를 클릭하시면 자세한 내용을 볼 수 있습니다</p>
        </div>
        
        <div className="experience-content">
          {/* 타임라인 섹션 */}
          <div className="timeline-section">
            <h3 className="section-subtitle">
              <Calendar size={20} />
              성장 타임라인
            </h3>
            <div className="timeline">
              {personalInfo.experience.timeline.map((item, index) => {
                const hasProject = findProjectById(item);
                return (
                  <div 
                    key={index} 
                    className={`timeline-item ${hasProject ? 'clickable' : ''}`}
                    onClick={() => hasProject && openModal(item)}
                  >
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-period">{item.period}</div>
                      <h4 className="timeline-title">
                        {item.title}
                      </h4>
                      <p className="timeline-description">{item.description}</p>
                      <div className="timeline-technologies">
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                      {hasProject && (
                        <div className="click-hint">
                          클릭하여 프로젝트 세부사항 보기
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 가치관과 목표
          <div className="values-goals">
            <div className="values-section">
              <h3 className="section-subtitle">
                <BookOpen size={20} />
                개발 가치관
              </h3>
              <div className="values-grid">
                {personalInfo.experience.values.map((value, index) => (
                  <div key={index} className="value-card">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="goals-section">
              <h3 className="section-subtitle">
                <Target size={20} />
                앞으로의 목표
              </h3>
              <ul className="goals-list">
                {personalInfo.experience.goals.map((goal, index) => (
                  <li key={index} className="goal-item">
                    <ArrowRight size={16} />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            {selectedProject && (
              <div className="modal-body">
                <div className="modal-header">
                  <div className="project-visual-section">
                    {/* 메인 이미지 영역 */}
                    <div className="project-main-image">
                      <div className="project-image-container">
                        <img
                          src={selectedProject.gallery && selectedProject.gallery[selectedImageIndex]
                            ? selectedProject.gallery[selectedImageIndex].image
                            : selectedProject.image}
                          alt={selectedProject.gallery && selectedProject.gallery[selectedImageIndex]
                            ? selectedProject.gallery[selectedImageIndex].title
                            : selectedProject.title}
                          className="project-image-img clickable-image"
                          onClick={openImageModal}
                        />
                        <div className="project-number">#{selectedProject.id}</div>
                        <div className="image-expand-hint">
                          <Eye size={16} />
                          클릭하여 확대보기
                        </div>
                      </div>
                    </div>

                    {/* 갤러리 미리보기 영역 */}
                    {selectedProject.gallery && selectedProject.gallery.length > 1 && (
                      <div className="gallery-thumbnails">
                        {selectedProject.gallery.map((galleryItem, index) => (
                          <div
                            key={galleryItem.id}
                            className={`thumbnail ${index === selectedImageIndex ? 'active' : ''}`}
                            onClick={() => selectImage(index)}
                          >
                            <img
                              src={galleryItem.image}
                              alt={galleryItem.title}
                              className="thumbnail-img"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <div className="thumbnail-title">{galleryItem.title}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* 프로젝트 정보 영역 */}
                  <div className="project-content-section">
                    <div className="project-basic-info">
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
                    </div>

                    {/* 프로젝트 액션 영역 */}
                    <div className="project-links">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {selectedProject.youtube ? (
                        <a
                          href={selectedProject.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <Play size={18} />
                          Play Video
                        </a>
                      ) : selectedProject.demo ? (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="modal-scroll-content">
                  <div className="content-section overview-section">
                    <div className="section-header">
                      <CheckCircle className="section-icon" />
                      <h4>프로젝트 개요</h4>
                    </div>
                    <p className="overview-text">{selectedProject.details.overview}</p>
                  </div>

                  <div className="content-section features-section">
                    <div className="section-header">
                      <Eye className="section-icon" />
                      <h4>주요 기능</h4>
                    </div>
                    <div className="feature-grid">
                      {selectedProject.details.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="content-section parts-section">
                    <div className="section-header">
                      <BookOpen className="section-icon" />
                      <h4>제작파트</h4>
                    </div>
                    <div className="parts-categories">
                      {selectedProject.details.parts.map((category, index) => (
                        <div key={index} className="parts-category">
                          <div className="category-header">
                            <h5 className="category-title">{category.category}</h5>
                          </div>
                          <div className="category-items">
                            {category.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="part-item">
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="content-section challenges-section">
                    <div className="section-header">
                      <AlertTriangle className="section-icon" />
                      <h4>도전과 해결</h4>
                    </div>
                    <div className="challenges-solutions-grid">
                      <div className="challenges-column">
                        <div className="column-header">
                          <h5>어려웠던 점</h5>
                        </div>
                        <div className="challenge-list">
                          {selectedProject.details.challenges.map((challenge, index) => (
                            <div key={index} className="challenge-item">
                              <div className="item-number">{index + 1}</div>
                              <span>{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="solutions-column">
                        <div className="column-header">
                          <h5>해결한 방법</h5>
                        </div>
                        <div className="improvement-list">
                          {selectedProject.details.improvements.map((improvement, index) => (
                            <div key={index} className="improvement-item">
                              <div className="item-number">{index + 1}</div>
                              <span>{improvement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-section reflection-section">
                    <div className="section-header">
                      <Heart className="section-icon" />
                      <h4>프로젝트 소감</h4>
                    </div>
                    <div className="reflection-quote">
                      <div className="quote-icon">
                      </div>
                      <div className="quote-content">
                        <p>{selectedProject.details.reflection}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Image Expand Modal */}
      {isImageModalOpen && selectedProject && (
        <div className={`image-modal-overlay ${isImageModalOpen ? 'active' : ''}`} onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              <X size={24} />
            </button>
            <div className="image-modal-body">
              <img
                src={selectedProject.gallery && selectedProject.gallery[selectedImageIndex]
                  ? selectedProject.gallery[selectedImageIndex].image
                  : selectedProject.image}
                alt={selectedProject.gallery && selectedProject.gallery[selectedImageIndex]
                  ? selectedProject.gallery[selectedImageIndex].title
                  : selectedProject.title}
                className="expanded-image"
                onError={(e) => {
                  e.target.src = selectedProject.image;
                }}
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default About;