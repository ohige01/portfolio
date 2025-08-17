import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">{personalInfo.name}</h3>
            <p className="footer-subtitle">{personalInfo.title}</p>
            <p className="footer-description">
              사용자 중심의 웹 애플리케이션을 만드는 것이 저의 목표입니다.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>빠른 링크</h4>
              <ul>
                <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>홈</button></li>
                <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>소개</button></li>
                <li><button onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>기술</button></li>
                <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>프로젝트</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>연락처</button></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>연락처</h4>
              <ul>
                <li><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></li>
                <li><span>{personalInfo.phone}</span></li>
                <li><span>{personalInfo.location}</span></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>소셜 미디어</h4>
              <div className="footer-social">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="social-link"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} {personalInfo.name}. 모든 권리 보유.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={16} className="heart-icon" /> using React
            </p>
          </div>
          
          <button className="scroll-to-top" onClick={scrollToTop}>
            <span>↑</span>
            <span>맨 위로</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;