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
    troubleshooting: [
      {
        project: "이거먹자",
        issue: "DALL-E 3 API 동시 생성 개수 제한 문제",
        solution: "Redis를 활용한 동시성 제어 및 큐 시스템 구현. 비동기 처리를 통해 API 호출 대기 시간을 감소시키고 안정적인 이미지 생성 플로우 확립",
        tags: ["Redis", "동시성", "API", "비동기"]
      },
      {
        project: "이거먹자",
        issue: "팀원 간 작업 방식 차이로 인한 협업 어려움",
        solution: "업무 일정 문서화와 명확한 업무 지정을 통해 프로젝트 관리 체계화. 지속적인 소통과 커뮤니케이션으로 팀원 간 간극을 줄이고 효율적인 협업 환경 조성",
        tags: ["협업", "커뮤니케이션", "프로젝트 관리"]
      },
      {
        project: "PopFri",
        issue: "영화 추천 알고리즘의 응답 시간 지연",
        solution: "병렬 처리와 캐싱 도입으로 로직 실행 시간 단축. 사용자가 용납할 수 있는 응답 시간을 고려한 성능 최적화로 사용자 경험 개선",
        tags: ["성능 최적화", "캐싱", "병렬 처리"]
      }
    ],
    activities: [
      {
        period: "2025.07 - 2025.08",
        title: "HDMedi 인턴",
        description: "건강 상담 서비스 개발 및 의료 데이터 최신화",
        type: "인턴"
      },
      {
        period: "2025.04 - 2025.06",
        title: "서경대학교 SW Academy 4기",
        description: "소프트웨어 개발 역량 강화 및 기업 연계 프로젝트",
        type: "교육"
      },
      {
        period: "2023.09 - 2025.02",
        title: "UMC - 대학생 연합 개발 동아리",
        description: "웹 개발 프로젝트 및 기술 스터디 활동",
        type: "동아리"
      }
    ],
    awards: [
      {
        date: "2025.02",
        title: "UMC 7th Demo Day 대상",
        organizer: "University MakeUs Challenge",
        project: "이거먹자"
      },
      {
        date: "2024.12",
        title: "제 6회 서경대학교 프로그래밍 장려상",
        organizer: "서경대학교 소프트웨어학과"
      }
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
          "다양한 상황에 대응하는 AI 추천",
          "Fluentd를 통한 로그 수집 및 분석"
        ],
        challenges: [
          {
            title: "로그 수집 인프라 구성",
            description: "Fluentd와 Kafka를 활용한 로그 수집 시스템을 처음 구축하면서, 각 컴포넌트 간의 연동과 설정에 어려움이 있었습니다. 특히 데이터 파이프라인의 안정성과 확장성을 고려한 아키텍처 설계가 복잡했습니다."
          },
          {
            title: "실시간 데이터 스트리밍 환경 구축",
            description: "사용자 행동 로그를 실시간으로 수집하고 분석하는 과정에서 데이터 유실과 지연 문제가 발생했습니다. 대용량 트래픽을 처리할 수 있는 효율적인 스트리밍 환경 구성이 필요했습니다."
          },
          {
            title: "영화 추천 알고리즘의 응답 시간 지연",
            description: "다양한 추천 로직을 순차적으로 처리하면서 사용자가 체감하는 응답 시간이 길어졌습니다. 특히 외부 API 호출과 데이터베이스 조회가 병목 지점이 되었습니다."
          }
        ],
        improvements: [
          {
            title: "서버 아키텍처 설계도 작성",
            description: "로그 수집부터 저장, 분석까지의 전체 데이터 흐름을 시각화하고 문서화했습니다. 각 컴포넌트의 역할과 연결 관계를 명확히 하여 팀원들과 현직자에게 효과적으로 공유할 수 있었습니다."
          },
          {
            title: "데이터 흐름 개념 도식화",
            description: "Fluentd의 버퍼링 설정을 최적화하고, Kafka의 파티션 전략을 수립하여 데이터 처리 안정성을 확보했습니다. 실시간 모니터링 시스템을 구축하여 문제 발생 시 빠르게 대응할 수 있게 했습니다."
          },
          {
            title: "현직자와 지속적인 피드백 및 성능 최적화",
            description: "오브젠 현직자 분들과 주기적인 리뷰를 통해 아키텍처 개선점을 도출했습니다. 추천 알고리즘에 병렬 처리를 도입하고, 자주 조회되는 데이터는 Redis 캐싱을 적용하여 응답 시간을 대폭 단축했습니다."
          }
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
          description: "popfri 메인 화면"
        },
        {
          id: 2,
          image: "/images/popfri_architecture.png",
          title: "서버 아키텍처",
          description: "popfri 서버 아키텍처 도식화"
        },
        {
          id: 3,
          image: "/images/popfri_wireframe.png",
          title: "와이어프레임",
          description: "피그마로 제작한 popfri 와이어프레임"
        },
        {
          id: 4,
          image: "/images/popfri_erd_1.png",
          title: "서비스 페이지 ERD",
          description: "popfri 서비스 페이지 ERD"
        },
        {
          id: 5,
          image: "/images/popfri_erd_2.png",
          title: "관리자 페이지 ERD",
          description: "popfri 관리자 페이지 ERD"
        }
      ]
    },
    {
      id: 2,
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
          {
            title: "이미지 동시 생성 개수 제한",
            description: "DALL-E 3 API는 동시에 처리할 수 있는 요청 수가 제한되어 있어, 여러 음식 이미지를 한 번에 생성할 때 오류가 발생했습니다. 사용자가 식단을 조회할 때마다 대기 시간이 길어지는 문제가 있었습니다."
          },
          {
            title: "외부 API 연동 시 발생하는 지연 시간 처리",
            description: "Naver Shopping API와 KAMIS API를 동시에 호출하면서 응답 시간이 누적되어 전체적인 서비스 속도가 느려졌습니다. 외부 API의 장애나 타임아웃에 대한 예외 처리도 필요했습니다."
          },
          {
            title: "인적 자원, 프로젝트 일정 관리",
            description: "팀원들의 작업 방식과 일정 관리 방법이 달라 프로젝트 진행 상황을 파악하기 어려웠습니다. 업무 분담이 명확하지 않아 중복 작업이나 누락되는 부분이 발생했습니다."
          }
        ],
        improvements: [
          {
            title: "Redis를 활용한 동시성 제어",
            description: "Redis를 활용한 큐 시스템을 구현하여 이미지 생성 요청을 순차적으로 처리했습니다. API 호출 제한을 고려한 Rate Limiting을 적용하여 안정적인 이미지 생성 플로우를 확립했습니다."
          },
          {
            title: "비동기 처리를 통한 호출 대기 시간 감소",
            description: "Node.js의 비동기 처리를 활용하여 여러 API를 병렬로 호출하도록 개선했습니다. API 호출 실패 시 재시도 로직과 Circuit Breaker 패턴을 적용하여 서비스 안정성을 높였습니다."
          },
          {
            title: "업무 일정 문서화, 명확한 업무 지정",
            description: "Notion을 활용하여 전체 프로젝트 일정과 개인별 업무를 시각화했습니다. 주간 단위로 작업 내용을 공유하고, 데일리 스크럼을 통해 팀원 간 진행 상황을 투명하게 공유하여 협업 효율을 크게 개선했습니다."
          }
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
      id: 3,
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
          {
            title: "복잡한 ERD 설계",
            description: "플래시 카드, 덱, 학습 세션, 통계 등 다양한 엔티티 간의 관계를 설계하는 것이 복잡했습니다. 특히 학습 알고리즘에 필요한 데이터 구조를 효율적으로 모델링하는 데 어려움이 있었습니다."
          },
          {
            title: "노트에디터 객체 입력 효율성 저하",
            description: "사용자가 입력하는 노트 데이터를 관계형 데이터베이스에 저장할 때, 복잡한 계층 구조로 인해 쿼리 성능이 저하되었습니다. 대량의 노트 데이터 저장 시 응답 시간이 길어지는 문제가 발생했습니다."
          },
          {
            title: "첫 협업 경험",
            description: "Git을 활용한 협업이 처음이라 브랜치 관리와 코드 리뷰 프로세스가 익숙하지 않았습니다. 머지 충돌 해결과 팀원들과의 코드 스타일 통일에 어려움이 있었습니다."
          }
        ],
        improvements: [
          {
            title: "도메인 및 서비스 분석을 통한 ERD 설계",
            description: "플래시 카드 학습 서비스의 핵심 도메인을 분석하고, 필수 기능을 우선순위로 나누어 ERD를 단계적으로 설계했습니다. 정규화를 적절히 적용하여 데이터 무결성과 성능의 균형을 맞췄습니다."
          },
          {
            title: "MongoDB와 MySQL 저장 시간 비교",
            description: "노트 데이터의 특성을 고려하여 NoSQL(MongoDB)과 RDBMS(MySQL)의 성능을 비교 테스트했습니다. 계층 구조 데이터의 경우 MongoDB가 더 효율적이라는 것을 확인하고, 하이브리드 구조를 고려했습니다."
          },
          {
            title: "깃 플로우 방식을 통한 협업",
            description: "Git Flow 브랜치 전략을 학습하고 팀에 도입했습니다. feature, develop, main 브랜치를 체계적으로 관리하고, Pull Request와 코드 리뷰를 통해 코드 품질을 향상시켰습니다. 협업 규칙을 문서화하여 팀원들과 공유했습니다."
          }
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