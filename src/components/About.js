import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import ProjectModal from './projects/ProjectModal';
import '../styles/About.css';

/**
 * About 컴포넌트 - 개발자 여정과 프로젝트 타임라인
 */
const About = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * 타임라인 항목에 해당하는 프로젝트 찾기
   * @param {object} timelineItem - 타임라인 항목
   * @returns {object|undefined} - 매칭되는 프로젝트
   */
  const findProjectById = (timelineItem) => {
    return personalInfo.projects.find(project =>
      project.title === timelineItem.title
    );
  };

  /**
   * 프로젝트 모달 열기
   * @param {object} timelineItem - 타임라인 항목
   */
  const openModal = (timelineItem) => {
    const project = findProjectById(timelineItem);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  /**
   * 프로젝트 모달 닫기
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">개발자로서의 여정</h2>
          <p className="section-description">프로젝트를 클릭하시면 자세한 내용을 볼 수 있습니다.</p>
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
        </div>
      </div>

      {/* 프로젝트 모달 */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default About;
