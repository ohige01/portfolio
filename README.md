# 개발자 포트폴리오 웹사이트

## 프로젝트 소개

React를 사용하여 구현한 개발자 포트폴리오 웹사이트입니다. 다크모드 테마와 흑백 계열 색상을 주로 사용하여 깔끔하고 모던한 디자인을 구현했습니다.

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 화면
- **다크모드 테마**: 흑백 계열 색상을 사용한 세련된 디자인
- **스무스 스크롤링**: 부드러운 페이지 내 네비게이션
- **인터랙티브 요소**: 호버 효과, 애니메이션 등 동적 UI
- **쉬운 개인정보 수정**: `src/config/personalInfo.js` 파일을 통한 간편한 정보 업데이트

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.js       # 헤더 및 네비게이션
│   ├── Hero.js         # 메인 히어로 섹션
│   ├── About.js        # 소개 섹션
│   ├── Skills.js       # 기술 스택 섹션
│   ├── Projects.js     # 프로젝트 섹션
│   ├── Contact.js      # 연락처 섹션
│   └── Footer.js       # 푸터
├── styles/             # CSS 스타일 파일
│   ├── global.css      # 전역 스타일
│   ├── Header.css      # 헤더 스타일
│   ├── Hero.css        # 히어로 섹션 스타일
│   ├── About.css       # 소개 섹션 스타일
│   ├── Skills.css      # 스킬 섹션 스타일
│   ├── Projects.css    # 프로젝트 섹션 스타일
│   ├── Contact.css     # 연락처 섹션 스타일
│   └── Footer.css      # 푸터 스타일
├── config/             # 설정 파일
│   └── personalInfo.js # 개인정보 설정
└── App.js              # 메인 앱 컴포넌트
```

## 개인정보 수정 방법

`src/config/personalInfo.js` 파일을 편집하여 개인정보를 쉽게 업데이트할 수 있습니다:

```javascript
export const personalInfo = {
  name: "홍길동",                    // 이름
  title: "Full Stack Developer",    // 직업/타이틀
  email: "your.email@example.com",  // 이메일
  phone: "+82-10-1234-5678",       // 전화번호
  location: "서울, 대한민국",        // 위치
  github: "https://github.com/...", // GitHub 링크
  linkedin: "https://linkedin.com/in/...", // LinkedIn 링크
  bio: "자기소개",                   // 자기소개
  
  skills: {
    frontend: [...],  // 프론트엔드 기술
    backend: [...],   // 백엔드 기술
    tools: [...]      // 도구 및 플랫폼
  },
  
  projects: [...]     // 프로젝트 목록
};
```

## 설치 및 실행

### 필요 조건
- Node.js (v14 이상)
- npm 또는 yarn

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```

브라우저에서 `http://localhost:3000`으로 접속하여 확인할 수 있습니다.

### 빌드
```bash
npm run build
```

## 사용된 기술

- **React** - UI 라이브러리
- **CSS3** - 스타일링 (CSS Variables, Flexbox, Grid)
- **Lucide React** - 아이콘
- **React Router DOM** - 라우팅 (향후 확장용)

## 주요 특징

### 1. 컴포넌트 기반 구조
- 각 섹션이 독립적인 컴포넌트로 분리
- 재사용 가능하고 유지보수가 용이한 구조

### 2. CSS 변수를 활용한 테마 시스템
- 일관된 색상 및 스타일 관리
- 쉬운 테마 변경 가능

### 3. 반응형 디자인
- 모바일 우선 접근법
- 모든 기기에서 최적화된 사용자 경험

### 4. 성능 최적화
- 효율적인 CSS 구조
- 최소한의 JavaScript로 빠른 로딩

## 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.