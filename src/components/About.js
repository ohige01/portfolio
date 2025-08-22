import React from 'react';
import { Calendar, Target, BookOpen, ArrowRight } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">개발자로서의 여정</h2>
        </div>
        
        <div className="experience-content">
          {/* 타임라인 섹션 */}
          <div className="timeline-section">
            <h3 className="section-subtitle">
              <Calendar size={20} />
              성장 타임라인
            </h3>
            <div className="timeline">
              {personalInfo.experience.timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-period">{item.period}</div>
                    <h4 className="timeline-title">{item.title}</h4>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-technologies">
                      {item.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 가치관과 목표 */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;