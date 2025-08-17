import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
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
            <span className="highlight">{personalInfo.name}</span>입니다
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
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <button onClick={scrollToAbout} className="btn btn-primary">
              더 알아보기
            </button>
          </div>
        </div>
        
        <div className={`hero-visual ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="avatar-container">
            <div className="avatar">
              <div className="avatar-placeholder">
                {personalInfo.name.charAt(0)}
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1"></div>
              <div className="floating-element element-2"></div>
              <div className="floating-element element-3"></div>
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