import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';
import '../styles/Skills.css';

const Skills = () => {
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
          <p className="section-subtitle">제가 사용할 수 있는 기술들입니다.</p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              
              <div className="skills-grid">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;