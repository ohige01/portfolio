export const personalInfo = {
  name: "최선규",
  title: "Backend Developer",
  email: "ohige01@skuniv.ac.kr",
  phone: "(+82) 010-5034-8988",
  location: "서울, 대한민국",
  github: "https://github.com/ohige01",
  bio: "범용성 높은 개발자가 되기 위해 노력하는 백엔드 개발자입니다. 새로운 환경이나 문화에 유연하게 적응하며, 낯선 도전을 극복하고 숙력될 때 보람을 느낍니다.",
  
  experience: {
    timeline: [
      {
        period: "2025.04 - 2025.06",
        title: "PopFri - 나만의 팝콘 친구",
        description: "AI 기반 사용자 맞춤 영화 추천 서비스 개발",
        technologies: ["Spring Boot", "React", "MySQL", "Kafka", "Fluentd"]
      },
      {
        period: "2024.12 - 2025.02",
        title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
        description: "AI 기반 사용자 맞춤 식단 제공 서비스 개발",
        technologies: ["Node.js", "MySQL", "DALL-E 3", "Naver API", "AWS"]
      },
      {
        period: "2024.07 - 2024.08",
        title: "Cardify - 지능적인 플래시 카드 학습 서비스",
        description: "플래시 카드 학습 기반 노트 에디터 개발",
        technologies: ["Spring Boot", "MySQL", "Java", "JPA"]
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
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kafka", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
      { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ],
    tools: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
      { name: "GCP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
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
      period: "2025.04 - 2025.06",
      role: "백엔드 개발 및 시스템 아키텍처 설계",
      technologies: ["Spring Boot", "React", "MySQL", "Kafka", "Fluentd", "Figma"],
      details: {
        overview: 
          "서경대학교 SW Academy 기간동안 제작한 프로젝트로, 오브젠 기업의 “로그데이터 분석을 통한 고객 데이터 활용 및 분석” 과제를 수행하려 만든 프로젝트입니다.\n\n" +
          "코로나 시기 이후, OTT 시장이 활성화되면서 굉장히 많은 영상 컨텐츠들을 접할 수 있게 되었지만, 과도한 컨텐츠 양으로 오히려 어떤 컨텐츠를 소비할 지 결정하기 어려워졌습니다. 이러한 상황 속에서 사용자 성향에 맞는 영상 컨텐츠를 추천해주는 서비스가 필요하다고 생각해 프로젝트를 제작하였습니다.",
        features: [
          "사용자 선호도 기반 영화 추천 알고리즘",
          "실시간 평점 및 리뷰 시스템",
          "Kafka를 활용한 이벤트 스트리밍 처리",
          "Fluentd를 통한 로그 수집 및 분석"
        ],
        challenges: [
          "로그 수집 인프라 구성",
          "실시간 데이터 스트리밍 환경 구축"
        ],
        improvements: [
          "서버 아키텍처 설계도 작성",
          "데이터 흐름 개념 도식화",
          "현직자와 지속적인 피드백"
        ],
        parts: [
          "기획 및 디자인",
          "백엔드 API 개발",
          "데이터베이스 설계",
          "로그 수집 시스템 구축",
          "추천 알고리즘 개발",
          "프론트엔드 개발"
        ],
        reflection: 
        "프로젝트 제작 시에 필요한 모든 역할들을 수행해볼수 있었습니다. 특히, 개발 분야가 아닌 기획과 디자인을 직접 제작하며 DevOps에 대한 이해도를 높일 수 있었습니다.\n\n"+
        "현직자에게 직접 서비스에 대한 피드백을 받아 사용자가 편하고 오래 이용할 수 있는 서비스가 되려면 어떤 노력을 기울여야 하는지 알 수 있었습니다.\n" +
        "특히, 영화 추천을 위해 사용자가 용납할 수 있는 시간이 어느 정도인지 고민하며, 로직 실행 시간을 줄이기위해 병렬 처리와 캐싱을 도입했던 것이 기억에 남습니다."
      },
      github: "https://github.com/ohige01/popfri",
      demo: null,
      youtube: "https://youtu.be/N0tc_PW0Ng8",
      image: "/images/popfri.png"
    },
    {
      id: 2,
      title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
      description: "AI 기반 사용자 맞춤 식단 제공 서비스",
      period: "2024.12 - 2025.02",
      role: "백엔드 개발 및 시스템 아키텍처 설계",
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
        parts: [
          "기획 및 요구사항 분석",
          "백엔드 API 개발",
          "데이터베이스 설계",
          "AI 모델 통합",
          "외부 API 연동",
          "프론트엔드 개발",
          "AWS 인프라 구축"
        ],
        reflection: "AI API를 실제 서비스에 통합하는 첫 경험이었습니다. 외부 API 의존성 관리와 비용 최적화의 중요성을 배웠고, 사용자 중심의 서비스 설계에 대해 많이 고민하게 된 프로젝트였습니다."
      },
      github: "https://github.com/ohige01/eat-this",
      demo: null,
      youtube: "https://youtu.be/MCwqymBcdvs",
      image: "/images/eatthis.png"
    },
    {
      id: 3,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      period: "2024.07 - 2024.08",
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
        parts: [
          "기획 및 요구사항 분석",
          "백엔드 API 개발",
          "데이터베이스 설계",
          "학습 알고리즘 설계",
          "JPA 모델링",
          "프론트엔드 개발"
        ],
        reflection: "학습 도메인에 대한 깊은 이해가 필요한 프로젝트였습니다. 사용자의 학습 패턴을 데이터로 분석하고, 이를 바탕으로 개인화된 학습 경험을 제공하는 과정에서 도메인 지식의 중요성을 깨달았습니다."
      },
      github: "https://github.com/ohige01/cardify",
      demo: null,
      youtube: null,
      image: "/images/cardify.png"
    }
  ]
};