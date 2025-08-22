import React from 'react';
import { User, MapPin, Heart } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">저에 대해 더 자세히 알아보세요</p>
        </div>
        
        <div className="about-content">
          <div className="about-info">
            <div className="info-card">
              <div className="info-icon">
                <User size={24} />
              </div>
              <div className="info-text">
                <h3>이름</h3>
                <p>{personalInfo.name}</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h3>위치</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="info-icon">
                <Heart size={24} />
              </div>
              <div className="info-text">
                <h3>관심분야</h3>
                <p>{personalInfo.about.interests}</p>
              </div>
            </div>
          </div>
          
          <div className="about-description">
            <h3>소개</h3>
            <p>{personalInfo.bio}</p>
            
            <div className="stats">
              {/* <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">년간 경험</div>
              </div> */}
              <div className="stat-item">
                <div className="stat-number">{personalInfo.projects.length}</div>
                <div className="stat-label">진행한 프로젝트</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{Object.values(personalInfo.skills).flat().length}</div>
                <div className="stat-label">사용 기술</div>
              </div>
            </div>
            
            <div className="about-highlights">
              <h4>주요 특징</h4>
              <ul>
                {personalInfo.about.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
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