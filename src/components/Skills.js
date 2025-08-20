import React, { useState } from 'react';
import { Code, Database, Wrench, ChevronRight } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <Code size={24} />,
      skills: personalInfo.skills.frontend,
      description: '사용자 인터페이스 개발'
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: <Database size={24} />,
      skills: personalInfo.skills.backend,
      description: '서버 및 데이터베이스 개발'
    },
    {
      id: 'tools',
      title: 'Tools',
      icon: <Wrench size={24} />,
      skills: personalInfo.skills.tools,
      description: '개발 도구 및 플랫폼'
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">제가 사용할 수 있는 기술들입니다</p>
        </div>
        
        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <ChevronRight size={20} className="category-arrow" />
              </button>
            ))}
          </div>
          
          <div className="skills-display">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`skills-grid ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="skill-logo">
                      <img src={skill.logo} alt={skill.name} />
                    </div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h3>핵심 역량</h3>
            <ul>
              <li>모던 JavaScript (ES6+) 및 React 생태계</li>
              <li>반응형 웹 디자인 및 모바일 최적화</li>
              <li>RESTful API 설계 및 구현</li>
              <li>데이터베이스 설계 및 최적화</li>
              <li>버전 관리 및 CI/CD 파이프라인</li>
            </ul>
          </div>
          
          <div className="summary-card">
            <h3>학습 중인 기술</h3>
            <ul>
              <li>TypeScript 심화 학습</li>
              <li>Next.js 및 SSR/SSG</li>
              <li>Docker & Kubernetes</li>
              <li>GraphQL</li>
              <li>WebAssembly</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;