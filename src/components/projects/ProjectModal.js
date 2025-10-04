import React, { useState } from 'react';
import { Calendar, User, Tag, Github, ExternalLink, Play } from 'lucide-react';
import Modal from '../common/Modal';
import ImageGallery from './ImageGallery';
import ProjectDetails from './ProjectDetails';
import '../../styles/projects/ProjectModal.css';

/**
 * 프로젝트 모달 컴포넌트
 * @param {boolean} isOpen - 모달 열림 상태
 * @param {function} onClose - 모달 닫기 핸들러
 * @param {object} project - 프로젝트 데이터
 */
const ProjectModal = ({ isOpen, onClose, project }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // 이미지 선택 핸들러
  const handleSelectImage = (index) => {
    setSelectedImageIndex(index);
  };

  // 모달이 닫힐 때 이미지 인덱스 초기화
  const handleClose = () => {
    setSelectedImageIndex(0);
    onClose();
  };

  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose} className="project-modal">
      <div className="modal-body">
        <div className="modal-header">
          {/* 이미지 갤러리 영역 */}
          <ImageGallery
            gallery={project.gallery}
            selectedIndex={selectedImageIndex}
            onSelectImage={handleSelectImage}
            fallbackImage={project.image}
            projectTitle={project.title}
            projectId={project.id}
          />

          {/* 프로젝트 기본 정보 영역 */}
          <div className="project-content-section">
            <div className="project-basic-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              {/* 프로젝트 메타 정보 */}
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>{project.period}</span>
                </div>
                <div className="meta-item">
                  <User size={16} />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* 기술 스택 */}
              <div className="project-tech">
                <div className="tech-list">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      <Tag size={14} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 프로젝트 링크 버튼 */}
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
              {project.youtube ? (
                <a
                  href={project.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Play size={18} />
                  Play Video
                </a>
              ) : project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* 프로젝트 상세 정보 */}
        <ProjectDetails details={project.details} />
      </div>
    </Modal>
  );
};

export default ProjectModal;
