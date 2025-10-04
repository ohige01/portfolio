import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import '../../styles/common/Modal.css';

/**
 * 범용 모달 컴포넌트
 * @param {boolean} isOpen - 모달 열림 상태
 * @param {function} onClose - 모달 닫기 핸들러
 * @param {ReactNode} children - 모달 내용
 * @param {string} className - 추가 CSS 클래스
 * @param {boolean} showCloseButton - 닫기 버튼 표시 여부 (기본값: true)
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  showCloseButton = true
}) => {
  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27 && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // 모달 열릴 때 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isOpen ? 'active' : ''}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
