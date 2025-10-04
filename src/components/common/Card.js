import React from 'react';
import '../../styles/common/Card.css';

/**
 * 범용 카드 컴포넌트
 * @param {ReactNode} children - 카드 내용
 * @param {string} className - 추가 CSS 클래스
 * @param {boolean} hoverable - 호버 효과 활성화 여부 (기본값: true)
 * @param {function} onClick - 클릭 핸들러
 * @param {object} rest - 나머지 props
 */
const Card = ({
  children,
  className = '',
  hoverable = true,
  onClick,
  ...rest
}) => {
  const cardClass = `card ${hoverable ? 'card-hoverable' : ''} ${onClick ? 'card-clickable' : ''} ${className}`.trim();

  return (
    <div
      className={cardClass}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
