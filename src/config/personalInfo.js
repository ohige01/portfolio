export const personalInfo = {
  name: "최선규",
  title: "Backend Developer",
  email: "ohige01@skuniv.ac.kr",
  phone: "(+82) 010-5034-8988",
  location: "서울, 대한민국",
  github: "https://github.com/ohige01",
  linkedin: "https://linkedin.com/in/yourusername",
  bio: "범용성 높은 개발자가 되기 위해 노력하는 백엔드 개발자입니다. 새로운 환경이나 문화에 유연하게 적응하며, 낯선 도전을 극복하고 숙력될 때 보람을 느낍니다.",
  
  experience: {
    timeline: [
      {
        period: "2023 - 현재",
        title: "백엔드 개발 집중 학습",
        description: "Spring Boot와 Java를 중심으로 한 백엔드 개발 역량 강화",
        technologies: ["Spring Boot", "Java", "MySQL", "Kafka"]
      },
      {
        period: "2022 - 2023",
        title: "풀스택 개발 경험",
        description: "프론트엔드와 백엔드를 아우르는 웹 개발 전반에 대한 이해",
        technologies: ["React", "Node.js", "TypeScript", "AWS"]
      },
      {
        period: "2021 - 2022",
        title: "개발 입문",
        description: "프로그래밍 기초와 웹 개발의 기본 개념 학습",
        technologies: ["HTML", "CSS", "JavaScript", "Git"]
      }
    ],
    values: [
      {
        title: "지속적 학습",
        description: "빠르게 변화하는 기술 트렌드에 맞춰 꾸준히 학습하고 성장합니다"
      },
      {
        title: "문제 해결",
        description: "복잡한 문제를 단순하고 효율적인 방법으로 해결하는 것을 추구합니다"
      },
      {
        title: "협업과 소통",
        description: "팀원들과의 원활한 소통을 통해 더 나은 결과를 만들어갑니다"
      }
    ],
    goals: [
      "확장 가능한 서버 아키텍처 설계 역량 향상",
      "대용량 트래픽 처리 경험 쌓기",
      "오픈소스 프로젝트 기여",
      "기술 블로그 운영을 통한 지식 공유"
    ]
  },
  
  skills: {
    frontend: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
    ],
    backend: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ],
    tools: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/100px-Notion-logo.svg.png" },
      { name: "Slack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "PopFri - 나만의 팝콘 친구",
      description: "AI 기반 사용자 맞춤 영화 추천 서비스",
      period: "2023.09 - 2023.12 (4개월)",
      role: "백엔드 개발 및 시스템 아키텍처 설계",
      technologies: ["Spring Boot", "React", "MySQL", "Kafka", "Fluentd", "Figma"],
      details: {
        overview: "사용자의 선호도를 분석하여 개인 맞춤형 영화를 추천하는 웹 서비스입니다. 실시간 데이터 처리와 기계학습을 통해 정확한 추천 시스템을 구현했습니다.",
        features: [
          "사용자 선호도 기반 영화 추천 알고리즘",
          "실시간 평점 및 리뷰 시스템",
          "Kafka를 활용한 이벤트 스트리밍 처리",
          "Fluentd를 통한 로그 수집 및 분석"
        ],
        challenges: [
          "대용량 영화 데이터 처리와 성능 최적화",
          "추천 알고리즘의 정확도 개선",
          "실시간 데이터 스트리밍 환경 구축"
        ],
        improvements: [
          "Kafka를 통한 비동기 처리로 응답 속도 30% 향상",
          "DB 인덱싱과 쿼리 최적화로 검색 성능 개선",
          "캐싱 전략 도입으로 서버 부하 감소"
        ],
        reflection: "처음으로 메시지 큐를 도입한 프로젝트였는데, 실시간 데이터 처리의 중요성과 시스템 아키텍처 설계의 복잡함을 깊이 이해할 수 있었습니다. 특히 Kafka를 활용한 이벤트 스트리밍을 통해 확장 가능한 시스템을 구축하는 경험을 쌓았습니다."
      },
      github: "https://github.com/ohige01/popfri",
      demo: "https://popfri-demo.com",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
      description: "AI 기반 사용자 맞춤 식단 제공 서비스",
      period: "2023.06 - 2023.08 (3개월)",
      role: "풀스택 개발 및 AI 모델 통합",
      technologies: ["Node.js", "MySQL", "DALL-E 3", "Naver API", "AWS"],
      details: {
        overview: "사용자의 건강 상태와 선호도를 고려한 맞춤형 식단을 제공하고, AI로 생성된 음식 이미지를 통해 시각적 정보를 제공하는 웹 서비스입니다.",
        features: [
          "개인 건강 정보 기반 맞춤 식단 추천",
          "DALL-E 3를 활용한 음식 이미지 생성",
          "Naver API를 통한 식재료 정보 연동",
          "영양소 분석 및 칼로리 계산"
        ],
        challenges: [
          "OpenAI API 호출 비용 최적화",
          "외부 API 연동 시 발생하는 지연 시간 처리",
          "다양한 식단 데이터의 정규화 및 관리"
        ],
        improvements: [
          "API 캐싱 시스템 구축으로 중복 호출 50% 감소",
          "비동기 처리를 통한 사용자 경험 개선",
          "AWS 서비스를 활용한 안정적인 인프라 구축"
        ],
        reflection: "AI API를 실제 서비스에 통합하는 첫 경험이었습니다. 외부 API 의존성 관리와 비용 최적화의 중요성을 배웠고, 사용자 중심의 서비스 설계에 대해 많이 고민하게 된 프로젝트였습니다."
      },
      github: "https://github.com/ohige01/eat-this",
      demo: "https://eat-this-demo.com",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      period: "2023.03 - 2023.05 (3개월)",
      role: "백엔드 개발 및 데이터베이스 설계",
      technologies: ["Spring Boot", "MySQL", "Java", "JPA"],
      details: {
        overview: "효율적인 학습을 위한 플래시 카드 시스템과 노트 에디터를 결합한 학습 플랫폼입니다. 간격 반복 알고리즘을 적용하여 학습 효과를 극대화했습니다.",
        features: [
          "드래그 앤 드롭 기반 카드 편집기",
          "간격 반복 학습 알고리즘 적용",
          "학습 통계 및 진도 추적",
          "카테고리별 카드 분류 시스템"
        ],
        challenges: [
          "복잡한 학습 알고리즘의 데이터베이스 설계",
          "사용자 학습 패턴 분석 및 최적화",
          "직관적인 카드 편집 인터페이스 구현"
        ],
        improvements: [
          "JPA를 활용한 효율적인 데이터 모델링",
          "학습 통계 집계 쿼리 최적화",
          "메모리 사용량 최적화로 성능 개선"
        ],
        reflection: "학습 도메인에 대한 깊은 이해가 필요한 프로젝트였습니다. 사용자의 학습 패턴을 데이터로 분석하고, 이를 바탕으로 개인화된 학습 경험을 제공하는 과정에서 도메인 지식의 중요성을 깨달았습니다."
      },
      github: "https://github.com/ohige01/cardify",
      demo: "https://cardify-demo.com",
      image: "/images/project3.jpg"
    }
  ]
};