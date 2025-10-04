import React from 'react';
import '../../styles/common/Button.css';

/**
 * 범용 버튼 컴포넌트
 * @param {ReactNode} children - 버튼 내용
 * @param {string} variant - 버튼 스타일 (primary, secondary, outline, ghost)
 * @param {string} size - 버튼 크기 (sm, md, lg)
 * @param {ReactNode} icon - 버튼 아이콘
 * @param {string} className - 추가 CSS 클래스
 * @param {function} onClick - 클릭 핸들러
 * @param {boolean} disabled - 비활성화 상태
 * @param {string} type - 버튼 타입 (button, submit, reset)
 * @param {object} rest - 나머지 props
 */
const Button = ({
  children,
  variant = 'secondary',
  size = 'md',
  icon,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...rest
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children && <span className="btn-text">{children}</span>}
    </button>
  );
};

export default Button;
