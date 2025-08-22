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
      technologies: ["Spring", "React", "MySQL", "Kafka", "Fluentd", "Figma"],
      github: "https://github.com/ohige01/popfri",
      demo: "https://popfri-demo.com",
      image: "/images/project1.jpg"
    },
    {
      id: 2,
      title: "이거먹자 - 건강한 삶을 위한 맞춤형 솔루션",
      description: "AI 기반 사용자 맞춤 식단 제공 서비스",
      technologies: ["Node.js", "MySQL", "Dall-e 3", "Naver API", "AWS"],
      github: "https://github.com/ohige01/eat-this",
      demo: "https://eat-this-demo.com",
      image: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      technologies: ["Spring", "MySQL", "Java"],
      github: "https://github.com/ohige01/cardify",
      demo: "https://cardify-demo.com",
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "Cardify - 지능적인 플래시 카드 학습 서비스",
      description: "플래시 카드 학습 기반 노트 에디터",
      technologies: ["Spring", "MySQL", "Java"],
      github: "https://github.com/ohige01/cardify",
      demo: "https://cardify-demo.com",
      image: "/images/project3.jpg"
    }
  ]
};