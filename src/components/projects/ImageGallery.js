import React, { useState, useEffect } from 'react';
import { Eye, X } from 'lucide-react';
import '../../styles/projects/ImageGallery.css';

/**
 * 이미지 갤러리 컴포넌트
 * @param {Array} gallery - 갤러리 이미지 배열
 * @param {number} selectedIndex - 현재 선택된 이미지 인덱스
 * @param {function} onSelectImage - 이미지 선택 핸들러
 * @param {string} fallbackImage - 대체 이미지 URL
 * @param {string} projectTitle - 프로젝트 제목
 * @param {number} projectId - 프로젝트 ID
 */
const ImageGallery = ({
  gallery,
  selectedIndex,
  onSelectImage,
  fallbackImage,
  projectTitle,
  projectId
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // 이미지 확대 모달 열기
  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  // 이미지 확대 모달 닫기
  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  // ESC 키로 이미지 모달 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isImageModalOpen) {
        closeImageModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isImageModalOpen]);

  // 현재 표시할 이미지 정보
  const currentImage = gallery && gallery[selectedIndex]
    ? gallery[selectedIndex]
    : { image: fallbackImage, title: projectTitle };

  return (
    <div className="project-visual-section">
      {/* 메인 이미지 영역 */}
      <div className="project-main-image">
        <div className="project-image-container">
          <img
            src={currentImage.image}
            alt={currentImage.title}
            className="project-image-img clickable-image"
            onClick={openImageModal}
          />
          <div className="project-number">#{projectId}</div>
          <div className="image-expand-hint">
            <Eye size={16} />
            클릭하여 확대보기
          </div>
        </div>
      </div>

      {/* 갤러리 썸네일 영역 */}
      {gallery && gallery.length > 1 && (
        <div className="gallery-thumbnails">
          {gallery.map((galleryItem, index) => (
            <div
              key={galleryItem.id}
              className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
              onClick={() => onSelectImage(index)}
            >
              <img
                src={galleryItem.image}
                alt={galleryItem.title}
                className="thumbnail-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="thumbnail-title">{galleryItem.title}</div>
            </div>
          ))}
        </div>
      )}

      {/* 이미지 확대 모달 */}
      {isImageModalOpen && (
        <div
          className={`image-modal-overlay ${isImageModalOpen ? 'active' : ''}`}
          onClick={closeImageModal}
        >
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal}>
              <X size={24} />
            </button>
            <div className="image-modal-body">
              <img
                src={currentImage.image}
                alt={currentImage.title}
                className="expanded-image"
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
