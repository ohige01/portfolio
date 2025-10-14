import React from 'react';
import { CheckCircle, Eye, BookOpen, AlertTriangle, Heart } from 'lucide-react';
import '../../styles/projects/ProjectDetails.css';

/**
 * 프로젝트 상세 정보 컴포넌트
 * @param {object} details - 프로젝트 상세 정보 객체
 */
const ProjectDetails = ({ details }) => {
  if (!details) return null;

  return (
    <div className="modal-scroll-content">
      {/* 프로젝트 개요 */}
      <div className="content-section overview-section">
        <div className="section-header">
          <CheckCircle className="section-icon" />
          <h4>프로젝트 개요</h4>
        </div>
        <p className="overview-text">{details.overview}</p>
      </div>

      {/* 주요 기능 */}
      <div className="content-section features-section">
        <div className="section-header">
          <Eye className="section-icon" />
          <h4>주요 기능</h4>
        </div>
        <div className="feature-grid">
          {details.features.map((feature, index) => (
            <div key={index} className="feature-item">
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 제작 파트 */}
      <div className="content-section parts-section">
        <div className="section-header">
          <BookOpen className="section-icon" />
          <h4>제작파트</h4>
        </div>
        <div className="parts-categories">
          {details.parts.map((category, index) => (
            <div key={index} className="parts-category">
              <div className="category-header">
                <h5 className="category-title">{category.category}</h5>
              </div>
              <div className="category-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="part-item">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 도전과 해결 */}
      <div className="content-section challenges-section">
        <div className="section-header">
          <AlertTriangle className="section-icon" />
          <h4>도전과 해결</h4>
        </div>
        <div className="challenges-solutions-list">
          {details.challenges.map((challenge, index) => (
            <div key={index} className="challenge-solution-pair">
              <div className="challenge-block">
                <div className="block-header challenge-header">
                  <div className="item-number">{index + 1}</div>
                  <h5>어려웠던 점</h5>
                </div>
                <div className="block-content">
                  <p className="block-title">{challenge.title}</p>
                  <p className="block-description">{challenge.description}</p>
                </div>
              </div>
              <div className="solution-block">
                <div className="block-header solution-header">
                  <div className="item-number">{index + 1}</div>
                  <h5>해결한 방법</h5>
                </div>
                <div className="block-content">
                  <p className="block-title">{details.improvements[index].title}</p>
                  <p className="block-description">{details.improvements[index].description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 프로젝트 소감 */}
      <div className="content-section reflection-section">
        <div className="section-header">
          <Heart className="section-icon" />
          <h4>프로젝트 소감</h4>
        </div>
        <div className="reflection-quote">
          <div className="quote-content">
            <p>{details.reflection}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
