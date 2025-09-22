import React, { useEffect, useState } from 'react';
import { Github, Mail, MapPin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('skills');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className={`hero-text ${isVisible ? 'fade-in-up' : ''}`}>
          <h1 className="hero-title">
            안녕하세요, <br />
            <span className="highlight">{personalInfo.name}</span>입니다.
          </h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-description">{personalInfo.bio}</p>
          
          <div className="hero-info">
            <div className="info-item">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
            <div className="info-item">
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn">
              <Github size={18} />
              GitHub
            </a>
            <button onClick={scrollToAbout} className="btn btn-primary">
              더 알아보기
            </button>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="avatar-container">
            <div className="avatar">
              {personalInfo.profileImage ? (
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="avatar-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="avatar-placeholder" style={{ display: personalInfo.profileImage ? 'none' : 'flex' }}>
                {personalInfo.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button className="scroll-indicator" onClick={scrollToAbout}>
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;