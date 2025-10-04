export const personalInfo = {
  name: "최선규",
  title: "Backend Developer",
  email: "ohige01@skuniv.ac.kr",
  phone: "(+82) 010-5034-8988",
  location: "서울, 대한민국",
  github: "https://github.com/ohige01",
  bio: "범용성 높은 개발자가 되기 위해 노력하는 백엔드 개발자입니다.\n 새로운 기술과 다양한 경험에 끊임없이 도전하며 성장합니다.\n 단조로운 업무에 안주하지 않고, 고객 중심의 기술 혁신을 추구하며, 새로운 도전을 통해 지속적으로 성장하는 개발자가 되겠습니다.",
  profileImage: "/images/profile.jpg",
  
  experience: {
    timeline: [
      {
        period: "2025.07 - 2025.08",
        title: "HDMedi 건강 상담 서비스",
        description: "AI 기반 건강 상담 서비스",
        technologies: ["Spring Boot", "React", "GeminiOCR", "GCP"]
      },
      {
        period: "2025.04 - 2025.06",
        title: "PopFri - 나만의 팝콘 친구",
        description: "AI 기반 사용자 맞춤 영화 추천 서비스 개발",
        technologies: ["Spring Boot", "React", "MySQL", "Kafka", "Fluentd", "KTCloud"]
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
        title: "기술 혁신 추구",
        description: "AI, 클라우드, 데이터 분석 등 최신 기술을 활용해 실질적인 문제를 해결합니다"
      },
      {
        title: "사용자 중심 개발",
        description: "복잡한 기술을 사용자 친화적인 서비스로 구현하여 실제 가치를 창출합니다"
      },
      {
        title: "전체적 사고",
        description: "기획부터 배포까지 전 과정을 이해하고 최적의 솔루션을 설계합니다"
      },
      {
        title: "지속적 개선",
        description: "현업 경험과 피드백을 바탕으로 서비스를 지속적으로 발전시킵니다"
      }
    ],
    goals: [
      "마이크로서비스 아키텍처와 대규모 시스템 설계 경험 확장",
      "AI/ML 기술을 활용한 지능형 서비스 개발 역량 강화",
      "DevOps 및 클라우드 인프라 자동화 전문성 확보",
      "기술 리더십과 팀 성장을 이끄는 시니어 개발자로 발전",
      "오픈소스 기여와 기술 커뮤니티 활동을 통한 지식 생태계 참여"
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
      title: "HDMedi 건강 상담 서비스",
      description: "AI 기반 건강 상담 서비스",
      period: "2025.07 - 2025.08",
      role: "프론트엔드 개발, 백엔드 연동 및 개선",
      technologies: ["Spring Boot", "React", "GeminiOCR", "GCP"],
      details: {
        overview: 
          "HDMedi 인턴 활동 중 진행한 프로젝트로, 사용자의 병력, 약력 등의 의료정보를 토대로 사용자의 질문에 대답하는 AI 서비스입니다.",  
        features: [
          "처방전/약봉투 자동 입력",
          "RAG를 활용한 의료 정보 질의",
          "모바일 대응 반응형 설계"
        ],
        challenges: [
          "레거시 코드 존재, API 문서화 부족",
          "의료데이터 최신화 미흡",
          "OCR 성능 저하"
        ],
        improvements: [
          "AI Agent를 통한 API 분석",
          "공공데이터를 통한 의료데이터 최신화",
          "OCR 모델 변경 및 프롬프트 개선"
        ],
        parts: [
          {
            category: "기획 및 설계",
            items: ["ERD 설계"]
          },
          {
            category: "백엔드 개발",
            items: ["OCR 서비스 개선", "기존 서비스 분석"]
          },
          {
            category: "프론트엔드 개발",
            items: ["환자용 웹 페이지 구현", "API 연동"]
          }
        ],
        reflection: 
        "현업에서 프로젝트를 진행하기 위해 어떤 노력을 쏟아야 하는지 알 수 있었습니다.\n" +
        "정확한 목표를 세우기 위해 OKR을 수립하고, 진행상황을 공유하기 위해 매일 스크럼을 진행했습니다. 또한, 실제 업무에서 자주 사용하는 Slack과 Jira를 사용하며, 현업에서의 의사소통 또한 경험할 수 있었습니다.\n\n" +
        "레거시 코드를 분석하며, 코드 이해도를 높일 수 있었습니다.\n" +
        "기존 서비스를 개선하고, 연동하기 위해 코드를 분석해야 했습니다. 이 과정을 통해 데이터 흐름에 대해 이해할 수 있었고, 타인이 작성한 코드를 분석해보는 업무를 수행했습니다."
      },
      github: null,
      demo: "https://chat.hdmedi.kr",
      youtube: null,
      image: "/images/hdmedi.png",
      gallery: [
        {
          id: 1,
          image: "/images/hdmedi.png",
          title: "썸네일",
          description: "hdmedi 상담 서비스 메인 화면"
        },
        {
          id: 2,
          image: "/images/hdmedi_service.png",
          title: "서비스 화면",
          description: "로그인 시 접속 화면"
        },
        {
          id: 3,
          image: "/images/hdmedi_ocr.png",
          title: "OCR 결과 화면",
          description: "처방전/약봉투 인식 결과 화면"
        }
      ]
    },
    {
      id: 2,
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
          "다양한 상황에 대응하는 AI 추천",
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
          {
            category: "기획 및 설계",
            items: ["기획 및 디자인", "ERD 설계", "API 설계", "시스템 아키텍처 설계"]
          },
          {
            category: "백엔드 개발",
            items: ["로그 수집 시스템 구축", "소셜 로그인(OAuth2) 구현", "영화 탐색, 마이 페이지, 관리 프로세스 생성/조회/관리 api 구현", "서버 배포/관리" ]
          },
          {
            category: "프론트엔드 개발",
            items: ["영화 탐색, 마이 페이지 구현", "관리자 페이지 구현"]
          }
        ],
        reflection: 
        "프로젝트 제작 시에 필요한 모든 역할들을 수행해볼수 있었습니다. 특히, 개발 분야가 아닌 기획과 디자인을 직접 제작하며 DevOps에 대한 이해도를 높일 수 있었습니다.\n\n"+
        "현직자에게 직접 서비스에 대한 피드백을 받아 사용자가 편하고 오래 이용할 수 있는 서비스가 되려면 어떤 노력을 기울여야 하는지 알 수 있었습니다.\n" +
        "특히, 영화 추천을 위해 사용자가 용납할 수 있는 시간이 어느 정도인지 고민하며, 로직 실행 시간을 줄이기위해 병렬 처리와 캐싱을 도입했던 것이 기억에 남습니다."
      },
      github: "https://github.com/PopFri",
      demo: null,
      youtube: "https://youtu.be/N0tc_PW0Ng8",
      image: "/images/popfri.png",
      gallery: [
        {
          id: 1,
          image: "/images/popfri.png",
          title: "썸네일",
          description: "사용자 맞춤 영화 추천 서비스의 메인 화면"
        },
        {
          id: 2,
          image: "/images/popfri_wireframe.png",
          title: "와이어프레임",
          description: "피그마로 제작한 popfri 와이어프레임"
        },
        {
          id: 3,
          image: "/images/popfri_erd_1.png",
          title: "서비스 페이지 ERD",
          description: "popfri 서비스 페이지 ERD"
        },
        {
          id: 4,
          image: "/images/popfri_erd_2.png",
          title: "관리자 페이지 ERD",
          description: "popfri 관리자 페이지 ERD"
        }
      ]
    },
    {
      id: 3,
      title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
      description: "AI 기반 사용자 맞춤 식단 제공 서비스",
      period: "2024.12 - 2025.02",
      role: "백엔드 개발 및 시스템 아키텍처 설계",
      technologies: ["Node.js", "MySQL", "DALL-E 3", "Naver API", "AWS"],
      details: {
        overview: "평소에 자주 던지는 질문 중 하나인 ‘오늘 뭐먹지?’에 대한 고민을 해결해줄 수 있는 프로젝트이고, 인간의 3대 요소 중 하나인 식을 해결하기 위해 AI를 어떻게 활용할 수 있을까하는 궁금증을 갖고 이 프로젝트를 참여하였습니다.",
        features: [
          "개인 건강 정보 기반 맞춤 식단 추천",
          "DALL-E 3를 활용한 음식 이미지 생성",
          "Naver API를 통한 식재료 정보 연동",
          "KAMIS 데이터를 통한 식제료 시세 제공"
        ],
        challenges: [
          "이미지 동시 생성 개수 제한",
          "외부 API 연동 시 발생하는 지연 시간 처리",
          "인적 자원, 프로젝트 일정 관리"
        ],
        improvements: [
          "Redis를 활용한 동시성 제어",
          "비동기 처리를 통한 호출 대기 시간 감소",
          "업무 일정 문서화, 명확한 업무 지정"
        ],
        parts: [
          {
            category: "기획 및 설계",
            items: ["ERD 설계", "API 설계"]
          },
          {
            category: "백엔드 개발",
            items: ["서버 배포 및 관리", "CI/CD 구축", "식단 이미지 생성, 배송지, 유저 구독 내역, 식재료 관련 API 구현", "외부 API(Naver Shopping, KAMIS) 연동"]
          }
        ],
        reflection: "이번 프로젝트에서 주로 힘겨움을 느꼈던 것은 프로젝트 내부보다는 프로젝트 외부적인 요소였습니다.\n" + 
        "팀원들마다 진행하는 방식이 상이하고 저 또한 제게 부여된 과업들을 처리하는 방식이 달라 그 사이에 간극들을 줄이는 것이 굉장히 중요하다는 것을 느꼈습니다. 또한 인적 자원을 관리하고 팀원들과 지속적으로 소통하는 법 등 커뮤니케이션 능력을 키울 수 있었습니다.\n\n" + 
        "많은 고난들이 있었지만, 결과적으로 80여개 팀들 사이에서 대상을 수상하는 성과를 이뤄 제게 뜻깊은 프로젝트가 되었습니다."
      },
      github: "https://github.com/ohige01/eatthis",
      demo: null,
      youtube: "https://youtu.be/MCwqymBcdvs",
      image: "/images/eatthis.png",
      gallery: [
        {
          id: 1,
          image: "/images/eatthis.png",
          title: "메인 대시보드",
          description: "개인 맞춤형 식단 추천 서비스의 메인 화면"
        },
        {
          id: 2,
          image: "/images/eatthis_erd.png",
          title: "이거먹자 ERD",
          description: "이거먹자 ERD"
        },
        {
          id: 3,
          image: "/images/eatthis_api.png",
          title: "이거먹자 API 목록",
          description: "이거먹자 API 목록"
        }
      ]
    },
    {
      id: 4,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      period: "2024.07 - 2024.08",
      role: "백엔드 개발 및 데이터베이스 설계",
      technologies: ["Spring Boot", "MySQL", "Java", "JPA"],
      details: {
        overview: "학기 중에 배우는 과목들을 정리하기 위해 노트 프로그램을 많이 사용하는데, 제가 자주 사용하는 프로그램을 직접 만들어볼 수 있다는 것에 매력을 느껴 프로젝트에 참여했습니다.",
        features: [
          "지능적인 플래시 카드 학습",
          "툴바를 사용한 간편한 노트 작성",
          "학습 통계 및 진도 추적",
          "난이도 입력 기반 학습 알고리즘"
        ],
        challenges: [
          "복잡한 ERD 설계",
          "노트에디터 객체 입력 효율성 저하",
          "첫 협업 경험"
        ],
        improvements: [
          "도메인 및 서비스 분석을 통한 ERD 설계",
          "MongoDB와 MySQL 저장 시간 비교",
          "깃 플로우 방식을 통한 협업"
        ],
        parts: [
          {
            category: "기획 및 설계",
            items: ["ERD 설계"]
          },
          {
            category: "백엔드 개발",
            items: ["백엔드 API 개발", "JPA 모델링"]
          }
        ],
        reflection: "처음 서버 개발을 하며, 클라이언트와 서버의 관계에 대해 표면적으로만 알고 있었던 개념들을 직접 느끼며 이해할 수 있었습니다.\n\n동작의 효율성에 대해 많은 부분을 따져볼 수 없는 프론트와 달리 서버에는 AWS, Docker 등 여러 기술들을 어떻게 조합하는 지에 따라 많은 부분이 달라질 수 있음을 배웠습니다. 이러한 경험은 앞으로 제가 어떤 기술을 공부해야 하는지 알 수 있었습니다.\n\n팀원들과 협업은 깃 플로우 방식을 사용하였습니다. 협업을 특정 방식에 맞춰 진행하는 것은 처음이었습니다. 때문에 많은 부분이 서툴고 어색했는데, 시간이 지날수록 협업 방식이 정형화되어 있는 것이 작업 시간을 줄이고 작업 내용에 대해 이해하기 쉬워진다는 것을 깨달았습니다. 이러한 경험은 협업 방식이 정형화되고 프로세스가 정형화되었을 때의 이점을 다시 한번 생각해볼 수 있었습니다."
      },
      github: "https://github.com/ohige01/cardify",
      demo: null,
      youtube: null,
      image: "/images/cardify.png",
      gallery: [
        {
          id: 1,
          image: "/images/cardify.png",
          title: "메인 화면",
          description: "플래시 카드 학습 시스템의 메인 대시보드"
        },
        {
          id: 2,
          image: "/images/cardify_erd.png",
          title: "cardify erd",
          description: "cardify erd"
        }
      ]
    }
  ]
};