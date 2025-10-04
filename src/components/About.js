import React, { useState } from 'react';
import { Calendar, Briefcase, Trophy, Lightbulb, AlertCircle, CheckCircle } from 'lucide-react';
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

        {/* 상단: 타임라인 + 트러블슈팅 */}
        <div className="top-section">
          {/* 좌측: 타임라인 섹션 (55%) */}
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

          {/* 우측: 트러블슈팅 섹션 (45%) */}
          <div className="troubleshooting-section">
            <h3 className="section-subtitle">
              <Lightbulb size={20} />
              트러블슈팅
            </h3>
            <div className="troubleshooting-list">
              {personalInfo.experience.troubleshooting.map((item, index) => (
                <div key={index} className="troubleshooting-card">
                  <div className="troubleshooting-header">
                    <span className="project-badge">{item.project}</span>
                  </div>
                  <div className="troubleshooting-content">
                    <div className="issue-section">
                      <div className="section-label">
                        <AlertCircle size={16} />
                        <span>Issue</span>
                      </div>
                      <p className="issue-text">{item.issue}</p>
                    </div>
                    <div className="solution-section">
                      <div className="section-label">
                        <CheckCircle size={16} />
                        <span>Solution</span>
                      </div>
                      <p className="solution-text">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 하단: 교외활동 + 수상내역 */}
        <div className="bottom-section">
          {/* 교외 활동 섹션 */}
          <div className="activities-section">
            <h3 className="section-subtitle">
              <Briefcase size={20} />
              교외 활동
            </h3>
            <div className="activities-list">
              {personalInfo.experience.activities.map((activity, index) => (
                <div key={index} className="activity-card">
                  <div className="activity-header">
                    <span className="activity-period">{activity.period}</span>
                    <span className={`activity-type type-${activity.type}`}>
                      {activity.type}
                    </span>
                  </div>
                  <h4 className="activity-title">{activity.title}</h4>
                  <p className="activity-description">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 수상내역 섹션 */}
          <div className="awards-section">
            <h3 className="section-subtitle">
              <Trophy size={20} />
              수상내역
            </h3>
            <div className="awards-list">
              {personalInfo.experience.awards.map((award, index) => (
                <div key={index} className="award-card">
                  <div className="award-header">
                    <span className="award-date">{award.date}</span>
                  </div>
                  <h4 className="award-title">{award.title}</h4>
                  <p className="award-organizer">{award.organizer}</p>
                  {award.project && (
                    <span className="award-project">프로젝트: {award.project}</span>
                  )}
                </div>
              ))}
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
