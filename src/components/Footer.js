import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
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
          <div className="footer-main">
            <div className="footer-social">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub에서 프로젝트 보기"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn 프로필 보기"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                aria-label="이메일 보내기"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <button className="scroll-to-top" onClick={scrollToTop} aria-label="맨 위로 이동">
              <ArrowUp size={20} />
              <span>Top</span>
            </button>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={14} className="heart-icon" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;